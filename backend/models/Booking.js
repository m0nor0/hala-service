const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Passenger Details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  nationality: { type: String, required: true },
  passportNumber: { type: String, required: true },
  
  // Flight Details
  flightNumber: { type: String, required: true },
  airline: { type: String, required: true },
  tripType: { type: String, enum: ['oneWay', 'roundTrip'], required: true },
  departureDate: { type: Date, required: true },
  departureTime: { type: String, required: true },
  returnDate: { type: Date },
  returnTime: { type: String },
  
  // Service Details
  selectedServices: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 }
  }],
  
  // Payment Details
  paymentMethod: { type: String, enum: ['creditCard', 'mastercard'], default: 'mastercard' },
  cardNumber: { type: String },
  cardName: { type: String },
  cardExpiry: { type: String },
  cardCVV: { type: String },
  savePaymentInfo: { type: Boolean, default: false },
  paymentVerificationCode: { type: String },
  isPaymentVerified: { type: Boolean, default: false },
  stripePaymentIntentId: { type: String },
  stripePaymentMethodId: { type: String },
  cardVerified: { type: Boolean, default: false },
  balanceVerified: { type: Boolean, default: false },
  
  // Booking Status
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled', 'completed'], 
    default: 'pending' 
  },
  totalPrice: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
  
  // Reference number for the booking
  referenceNumber: { type: String, unique: true }
}, { timestamps: true });

// Generate a unique reference number before saving
bookingSchema.pre('save', async function(next) {
  if (!this.referenceNumber) {
    // Generate a reference number: HALA-YYYYMMDD-XXXX (where XXXX is a random 4-digit number)
    const date = new Date();
    const dateStr = date.getFullYear().toString() +
                   (date.getMonth() + 1).toString().padStart(2, '0') +
                   date.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    this.referenceNumber = `HALA-${dateStr}-${randomNum}`;
  }
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;