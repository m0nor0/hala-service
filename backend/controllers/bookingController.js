const Booking = require('../models/Booking');
// Import Stripe but initialize it in each function to ensure env variables are loaded
const stripePackage = require('stripe');

// Helper function to get Stripe instance
const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error('Stripe API key is missing. Please check your environment variables.');
  }
  return stripePackage(apiKey);
};

// Verify payment for a booking
exports.verifyPayment = async (req, res) => {
  try {
    const { referenceNumber, verificationCode } = req.body;
    
    // Find the booking by reference number
    const booking = await Booking.findOne({ referenceNumber });
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }
    
    // Check if the verification code matches
    if (booking.paymentVerificationCode !== verificationCode) {
      return res.status(400).json({
        success: false,
        message: 'Invalid verification code',
      });
    }
    
    // For Stripe payments (mastercard or creditCard), process the actual payment capture
    if ((booking.paymentMethod === 'mastercard' || booking.paymentMethod === 'creditCard') && booking.stripePaymentMethodId) {
      try {
        // Get Stripe instance with API key
        const stripe = getStripe();
        
        // Create a new payment intent for the actual charge
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(booking.totalPrice * 100), // Convert to cents
          currency: 'usd',
          payment_method: booking.stripePaymentMethodId,
          confirm: true, // Confirm the payment immediately
          description: `Payment for booking ${booking.referenceNumber}`,
          metadata: {
            booking_reference: booking.referenceNumber,
            customer_email: booking.email
          }
        });
        
        // Check if payment was successful
        if (paymentIntent.status === 'succeeded') {
          // Update the booking with the new payment intent ID
          booking.stripePaymentIntentId = paymentIntent.id;
        } else {
          return res.status(400).json({
            success: false,
            message: `Payment failed with status: ${paymentIntent.status}`,
          });
        }
      } catch (stripeError) {
        console.error('Stripe payment error:', stripeError);
        return res.status(400).json({
          success: false,
          message: stripeError.message || 'Payment processing failed',
          error: stripeError.code
        });
      }
    }
    
    // Update the booking to mark payment as verified
    booking.isPaymentVerified = true;
    booking.status = 'confirmed';
    await booking.save();
    
    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      data: {
        booking
      }
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify payment',
      error: error.message
    });
  }
};

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const bookingData = req.body;
    
    // Generate a 6-digit verification code for payment
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    bookingData.paymentVerificationCode = verificationCode;
    
    // Handle Stripe payment method for mastercard and creditCard
    if (bookingData.paymentMethod === 'mastercard' || bookingData.paymentMethod === 'creditCard') {
      // Validate card details are present
      if (!bookingData.cardNumber || !bookingData.cardExpiry || !bookingData.cardCVV) {
        return res.status(400).json({
          success: false,
          message: 'Card details are required for Stripe payment method'
        });
      }
      
      try {
        // Get Stripe instance with API key
        const stripe = getStripe();
        
        // Parse expiry date (MM/YY format)
        const [expMonth, expYear] = bookingData.cardExpiry.split('/');
        
        // Create a payment method with the card details
        const paymentMethod = await stripe.paymentMethods.create({
          type: 'card',
          card: {
            number: bookingData.cardNumber.replace(/\s+/g, ''),
            exp_month: parseInt(expMonth, 10),
            exp_year: parseInt(`20${expYear}`, 10),
            cvc: bookingData.cardCVV,
          },
        });
        
        // Store the payment method ID
        bookingData.stripePaymentMethodId = paymentMethod.id;
        bookingData.cardVerified = true;
        
        // Create a payment intent to verify the card has sufficient funds
        // We use a $0 amount with confirm=false to just validate the card without charging
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(bookingData.totalPrice * 100), // Convert to cents and ensure integer
          currency: 'usd',
          payment_method: paymentMethod.id,
          confirm: false,
          capture_method: 'manual', // This allows us to authorize without capturing
        });
        
        // Store the payment intent ID
        bookingData.stripePaymentIntentId = paymentIntent.id;
        
        // Confirm the payment intent to check for sufficient funds
        const confirmedIntent = await stripe.paymentIntents.confirm(paymentIntent.id);
        
        // If we get here without an error, the card has sufficient funds
        bookingData.balanceVerified = true;
        
        // Cancel the payment intent since we don't want to actually charge yet
        await stripe.paymentIntents.cancel(paymentIntent.id);
        
      } catch (stripeError) {
        console.error('Stripe error:', stripeError);
        
        // Handle different Stripe error types
        if (stripeError.type === 'StripeCardError') {
          return res.status(400).json({
            success: false,
            message: stripeError.message || 'Card verification failed',
            error: stripeError.code
          });
        } else if (stripeError.type === 'StripeInvalidRequestError') {
          return res.status(400).json({
            success: false,
            message: 'Invalid card information provided',
            error: stripeError.message
          });
        } else {
          return res.status(500).json({
            success: false,
            message: 'Payment processing error',
            error: stripeError.message
          });
        }
      }
    }
    
    // Create a new booking
    const booking = new Booking(bookingData);
    
    // Save the booking to the database
    await booking.save();
    
    // In a real application, this would send an email or SMS with the verification code
    console.log(`Payment verification code for booking ${booking.referenceNumber}: ${verificationCode}`);
    
    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: {
        booking,
        referenceNumber: booking.referenceNumber,
        verificationCode: verificationCode, // Include this in response for demo purposes
        cardVerified: booking.cardVerified,
        balanceVerified: booking.balanceVerified
      }
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create booking',
      error: error.message
    });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings',
      error: error.message
    });
  }
};

// Get a single booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
      error: error.message
    });
  }
};

// Get a booking by reference number
exports.getBookingByReference = async (req, res) => {
  try {
    const { referenceNumber } = req.params;
    
    const booking = await Booking.findOne({ referenceNumber });
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Error fetching booking by reference:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch booking',
      error: error.message
    });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updateData = req.body;
    
    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update booking',
      error: error.message
    });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete booking',
      error: error.message
    });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }
    
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: `Booking status updated to ${status}`,
      data: booking
    });
  } catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update booking status',
      error: error.message
    });
  }
};