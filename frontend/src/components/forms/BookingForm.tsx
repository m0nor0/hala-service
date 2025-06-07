import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
// Note: We're dynamically importing the API service in the handleSubmit function

interface FormData {
  // Passenger Details
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber: string;
  
  // Flight Details
  flightNumber: string;
  airline: string;
  date: string;
  time: string;
  passengers: number;
  specialRequests: string;
  tripType: 'oneWay' | 'roundTrip';
  returnDate?: string;
  returnTime?: string;
  
  // Service Selection
  selectedServices: string[];
  
  // Payment Details
  paymentMethod: 'mastercard' | 'creditCard';
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  savePaymentInfo: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  nationality?: string;
  passportNumber?: string;
  flightNumber?: string;
  airline?: string;
  date?: string;
  time?: string;
  passengers?: string;
  returnDate?: string;
  returnTime?: string;
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
  [key: string]: string | undefined; // Add index signature to make it compatible with Record<string, string>
}

const BookingForm: React.FC = () => {
  const { t } = useTranslation(['booking', 'common']);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    flightNumber: '',
    airline: '',
    date: '',
    time: '',
    passengers: 1,
    specialRequests: '',
    tripType: 'oneWay',
    selectedServices: [],
    paymentMethod: 'mastercard', // Default to Mastercard payment method
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    savePaymentInfo: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');
  
  // Payment verification states
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [paymentVerified, setPaymentVerified] = useState<boolean>(false);
  const [verificationCodeFromServer, setVerificationCodeFromServer] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [verificationError, setVerificationError] = useState<string>('');
  const [verificationMessage, setVerificationMessage] = useState<string>('');
  
  // Available services
  const services = [
    { id: 'meet_greet', name: t('services:categories.meet_greet'), price: 50, icon: '👋' },
    { id: 'lounges', name: t('services:categories.lounges'), price: 75, icon: '🛋️' },
    { id: 'vip', name: t('services:categories.vip'), price: 150, icon: '⭐' },
    { id: 'transfer', name: t('services:categories.transfer'), price: 60, icon: '🚗' },
    { id: 'baggage', name: t('services:categories.baggage'), price: 30, icon: '🧳' },
    { id: 'chauffeur', name: t('services:categories.chauffeur'), price: 100, icon: '🧑‍✈️' }
  ];

  // Airlines list
  const airlines = [
    'Emirates',
    'Qatar Airways',
    'Turkish Airlines',
    'Etihad Airways',
    'Lufthansa',
    'British Airways',
    'Air France',
    'KLM',
    'Singapore Airlines',
    'Other'
  ];

  // Countries list for nationality
  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'China',
    'India',
    'Brazil',
    'Saudi Arabia',
    'United Arab Emirates',
    'Turkey',
    'Other'
  ];

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  // Removed the useEffect that was scrolling to top when step changes
  // This prevents the page from jumping to the top when navigating between tabs

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      // Validate Passenger Details
      if (!formData.fullName.trim()) {
        newErrors.fullName = t('booking:validation.required') || undefined;
        isValid = false;
      }

      if (!formData.email.trim()) {
        newErrors.email = t('booking:validation.required') || undefined;
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = t('booking:validation.invalid_email') || undefined;
        isValid = false;
      }

      if (!formData.phone.trim()) {
        newErrors.phone = t('booking:validation.required') || undefined;
        isValid = false;
      } else if (!/^[\d+\-\s()]+$/.test(formData.phone)) {
        newErrors.phone = t('booking:validation.invalid_phone') || undefined;
        isValid = false;
      }

      if (!formData.nationality.trim()) {
        newErrors.nationality = t('booking:validation.required') || undefined;
        isValid = false;
      }
    } else if (currentStep === 2) {
      // Validate Flight Details
      if (!formData.flightNumber.trim()) {
        newErrors.flightNumber = t('booking:validation.required') || undefined;
        isValid = false;
      }

      if (!formData.airline.trim()) {
        newErrors.airline = t('booking:validation.required') || undefined;
        isValid = false;
      }

      if (!formData.date) {
        newErrors.date = t('booking:validation.required') || undefined;
        isValid = false;
      }

      if (!formData.time) {
        newErrors.time = t('booking:validation.required') || undefined;
        isValid = false;
      }

      // Validate return date and time if round trip is selected
      if (formData.tripType === 'roundTrip') {
        if (!formData.returnDate) {
          newErrors.returnDate = t('booking:validation.required') || undefined;
          isValid = false;
        }

        if (!formData.returnTime) {
          newErrors.returnTime = t('booking:validation.required') || undefined;
          isValid = false;
        }
      }
    } else if (currentStep === 4) {
      // Validate Payment Details
      if (!formData.cardNumber.trim() || !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = t('booking:validation.invalid_card') || undefined;
        isValid = false;
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = t('booking:validation.required') || undefined;
        isValid = false;
      }

      if (!formData.expiryDate.trim() || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = t('booking:validation.invalid_expiry') || undefined;
        isValid = false;
      }

      if (!formData.cvv.trim() || !/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = t('booking:validation.invalid_cvv') || undefined;
        isValid = false;
      }
    }

    setErrors(newErrors as Record<string, string>); // Cast to Record<string, string>
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleTripTypeChange = (type: 'oneWay' | 'roundTrip') => {
    setFormData(prev => ({
      ...prev,
      tripType: type
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => {
      const selectedServices = [...prev.selectedServices];
      if (selectedServices.includes(serviceId)) {
        return {
          ...prev,
          selectedServices: selectedServices.filter(id => id !== serviceId)
        };
      } else {
        return {
          ...prev,
          selectedServices: [...selectedServices, serviceId]
        };
      }
    });
  };

  const handleNext = () => {
    // Skip validation when moving from service selection (step 3) to payment (step 4)
    // This prevents validation errors from showing when first navigating to the payment tab
    if (step === 3) {
      setStep(prev => prev + 1);
      // Clear any errors when moving to payment step
      setErrors({});
    } else if (validateStep(step)) {
      setStep(prev => prev + 1);
      // Clear any submit error when navigating between steps
      if (errors.submit) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors.submit;
          return newErrors;
        });
      }
    }
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only validate payment details when the Submit button is pressed
    const isValid = validateStep(4);
    if (!isValid) {
      // Add a summary error message
      setErrors(prev => ({
        ...prev,
        submit: t('booking:errors.validation_incomplete') || 'Please complete all required fields before submitting.'
      }));
      // Scroll to the top of the form to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Import the API service
      const { createBooking } = await import('../../services/api');
      
      // Prepare the booking data in the format expected by the API
      const [firstName, lastName] = formData.fullName.split(' ', 2);
      
      // Map selected service IDs to full service objects with quantity
      const selectedServiceObjects = formData.selectedServices.map(serviceId => {
        const service = services.find(s => s.id === serviceId);
        return {
          id: service?.id || '',
          name: service?.name || '',
          price: service?.price || 0,
          quantity: 1
        };
      });
      
      // Calculate total price
      const totalPrice = selectedServiceObjects.reduce((sum, service) => sum + (service.price * service.quantity), 0);
      
      // Create booking data object
      const bookingData = {
        // Passenger Details
        firstName: firstName || formData.fullName, // Fallback if splitting fails
        lastName: lastName || '',
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        passportNumber: formData.passportNumber,
        
        // Flight Details
        flightNumber: formData.flightNumber,
        airline: formData.airline,
        tripType: formData.tripType,
        departureDate: formData.date,
        departureTime: formData.time,
        returnDate: formData.returnDate,
        returnTime: formData.returnTime,
        
        // Service Details
        selectedServices: selectedServiceObjects,
        
        // Payment Details
        paymentMethod: formData.paymentMethod,
        cardNumber: formData.cardNumber,
        cardName: formData.cardName,
        cardExpiry: formData.expiryDate,
        cardCVV: formData.cvv,
        savePaymentInfo: formData.savePaymentInfo,
        
        // Booking Status
        totalPrice: totalPrice
      };
      
      // Send the booking data to the API
      const response = await createBooking(bookingData);
      
      if (response.success) {
        // Set the booking reference from the API response
        setBookingReference(response.data?.referenceNumber || 'Unknown');
        // Store the verification code from the API response
        setVerificationCodeFromServer(response.data?.verificationCode || '');
        setFormSubmitted(true);
      } else {
        // Handle different types of error responses
        let errorMessage = response.message || t('booking:errors.submit_error') || 'Failed to create booking';
        
        // Check for specific error types in the response
        if (response.errorType) {
          switch (response.errorType) {
            case 'validation':
              errorMessage = t('booking:errors.validation_error') || 'Please check your information and try again.';
              break;
            case 'payment':
              errorMessage = t('booking:errors.payment_error') || 'There was an issue processing your payment. Please check your payment details.';
              break;
            case 'service':
              errorMessage = t('booking:errors.service_unavailable') || 'The service is temporarily unavailable. Please try again later.';
              break;
          }
        }
        
        // If the error message contains specific field errors, extract and display them
        if (response.fieldErrors && typeof response.fieldErrors === 'object') {
          const fieldErrors = { ...response.fieldErrors };
          setErrors(prev => ({ ...prev, ...fieldErrors, submit: errorMessage }));
        } else {
          setErrors(prev => ({ ...prev, submit: errorMessage }));
        }
        
        // Scroll to the top of the form to show errors
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Determine error type based on the caught error
      let errorMessage = t('booking:errors.unexpected_error') || 'An unexpected error occurred. Please try again later.';
      
      // Check if it's a network error
      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = t('booking:errors.network_error') || 'Network error. Please check your internet connection and try again.';
        } else if (error.message.includes('timeout')) {
          errorMessage = t('booking:errors.timeout_error') || 'The request timed out. Please try again.';
        }
      }
      
      setErrors(prev => ({ ...prev, submit: errorMessage }));
      
      // Scroll to the top of the form to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateTotal = () => {
    return formData.selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
  };

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle card number formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  // Format expiry date with slash
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length > 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  // Handle expiry date formatting
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setFormData(prev => ({
      ...prev,
      expiryDate: formattedValue
    }));
  };

  // Format CVV to only allow numbers
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({
      ...prev,
      cvv: value
    }));
  };

  // Function to handle payment verification
  const handleVerifyPayment = async () => {
    // Validate verification code input
    if (!verificationCode || verificationCode.trim() === '') {
      setVerificationError(t('booking:verification.code_required') || 'Verification code is required');
      return;
    }
    
    // Check if code is in the correct format (typically 6 digits)
    if (!/^\d{6}$/.test(verificationCode)) {
      setVerificationError(t('booking:verification.invalid_format') || 'Please enter a valid 6-digit verification code');
      return;
    }
    
    setIsVerifying(true);
    setVerificationError('');
    setVerificationMessage('');
    
    try {
      // Import the API service
      const { verifyPayment } = await import('../../services/api');
      
      // For card payments, show a processing message
      if (formData.paymentMethod === 'mastercard' || formData.paymentMethod === 'creditCard') {
        setVerificationMessage(t('booking:verification.processing') || 'Processing card payment...');
      }
      
      const response = await verifyPayment({
        referenceNumber: bookingReference,
        verificationCode: verificationCode
      });
      
      if (response.success) {
        setPaymentVerified(true);
        // Set success message
        setVerificationMessage(t('booking:verification.success') || 'Payment verified successfully!');
      } else {
        // Handle different types of verification errors
        let errorMessage = response.message || t('booking:verification.invalid_code') || 'Invalid verification code';
        
        // Check for specific error types in the response
        if (response.errorType) {
          switch (response.errorType) {
            case 'invalid_code':
              errorMessage = t('booking:verification.invalid_code') || 'The verification code you entered is incorrect. Please try again.';
              break;
            case 'expired':
              errorMessage = t('booking:verification.expired_code') || 'The verification code has expired. Please request a new code.';
              break;
            case 'max_attempts':
              errorMessage = t('booking:verification.max_attempts') || 'Maximum verification attempts reached. Please contact customer support.';
              break;
            case 'not_found':
              errorMessage = t('booking:verification.booking_not_found') || 'Booking reference not found. Please check your booking details.';
              break;
          }
        }
        
        setVerificationError(errorMessage);
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      
      // Determine error type based on the caught error
      let errorMessage = t('booking:verification.error') || 'Error verifying payment';
      
      // Check if it's a network error
      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = t('booking:verification.network_error') || 'Network error. Please check your internet connection and try again.';
        } else if (error.message.includes('timeout')) {
          errorMessage = t('booking:verification.timeout') || 'The verification request timed out. Please try again.';
        }
      }
      
      setVerificationError(errorMessage);
    } finally {
      setIsVerifying(false);
    }
  };

  if (formSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 text-center"
      >
        <div className="mb-6">
          {/* Payment Verification Section */}
          {!paymentVerified ? (
            <>
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-yellow-600 mb-2">Payment Verification Required</h2>
              <p className="text-gray-600 mb-6">Please verify your payment to complete your booking.</p>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-700">Enter Verification Code</h3>
                <p className="text-gray-600 mb-4">Please enter the 6-digit verification code sent to your email to confirm your payment.</p>
                
                {/* For demo purposes, show the verification code */}
                {verificationCodeFromServer && (
                  <div className="bg-blue-50 p-3 rounded-lg mb-4 inline-block">
                    <p className="text-sm text-blue-600">Demo: Your verification code is:</p>
                    <p className="font-mono font-bold text-xl">{verificationCodeFromServer}</p>
                  </div>
                )}
                
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-full max-w-xs">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      maxLength={6}
                    />
                  </div>
                  {verificationError && (
                    <p className="text-red-500 text-sm">{verificationError}</p>
                  )}
                  {verificationMessage && (
                    <p className="text-blue-500 text-sm">{verificationMessage}</p>
                  )}
                  <button
                    onClick={handleVerifyPayment}
                    disabled={isVerifying}
                    className={`${isVerifying ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300`}
                  >
                    {isVerifying ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verifying...
                      </span>
                    ) : 'Verify Payment'}
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">Booking Reference</h3>
                <p className="text-3xl font-mono bg-gray-100 p-3 rounded inline-block">{bookingReference}</p>
                <p className="text-sm text-gray-500 mt-2">Keep this reference number for your records.</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">Booking Confirmed</h2>
              <p className="text-gray-600 mb-6">{t('booking:confirmation.message')}</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-2">{t('booking:confirmation.reference')}</h3>
                <p className="text-3xl font-mono bg-gray-100 p-3 rounded inline-block">{bookingReference}</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-700">Payment Verified!</h3>
                <p className="text-gray-600">Your payment has been successfully verified. Your booking is now confirmed.</p>
              </div>
              
              <div className="text-left bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">{t('booking:confirmation.details')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.full_name')}</p>
                    <p className="font-medium">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.email')}</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.flight_number')}</p>
                    <p className="font-medium">{formData.flightNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.date')}</p>
                    <p className="font-medium">{formData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.time')}</p>
                    <p className="font-medium">{formData.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('booking:fields.passengers')}</p>
                    <p className="font-medium">{formData.passengers}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="mt-6">
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {t('booking:confirmation.return_home')}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Global Error Message */}
      {errors.submit && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-700">{t('booking:errors.submission_failed') || 'Submission Failed'}</h3>
              <div className="mt-1 text-sm text-red-600">
                <p>{errors.submit}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex-1 border-t-2 ${step >= 1 ? 'border-blue-500' : 'border-gray-200'}`}></div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} mx-2 transition-all duration-300 transform ${step === 1 ? 'scale-110' : ''}`}>1</div>
          <div className={`flex-1 border-t-2 ${step >= 2 ? 'border-blue-500' : 'border-gray-200'}`}></div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} mx-2 transition-all duration-300 transform ${step === 2 ? 'scale-110' : ''}`}>2</div>
          <div className={`flex-1 border-t-2 ${step >= 3 ? 'border-blue-500' : 'border-gray-200'}`}></div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} mx-2 transition-all duration-300 transform ${step === 3 ? 'scale-110' : ''}`}>3</div>
          <div className={`flex-1 border-t-2 ${step >= 4 ? 'border-blue-500' : 'border-gray-200'}`}></div>
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} mx-2 transition-all duration-300 transform ${step === 4 ? 'scale-110' : ''}`}>4</div>
          <div className={`flex-1 border-t-2 ${step >= 4 ? 'border-blue-500' : 'border-gray-200'}`}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="text-center w-1/4">{t('booking:form.passenger_details')}</div>
          <div className="text-center w-1/4">{t('booking:form.flight_details')}</div>
          <div className="text-center w-1/4">{t('booking:form.service_selection')}</div>
          <div className="text-center w-1/4">{t('booking:form.payment_details')}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* Step 1: Passenger Details */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">{t('booking:form.passenger_details')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                    {t('booking:fields.full_name')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t('booking:fields.full_name') as string}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs italic mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    {t('booking:fields.email')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    {t('booking:fields.phone')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
                    {t('booking:fields.nationality')} *
                  </label>
                  <select
                    className={`shadow appearance-none border ${errors.nationality ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                  >
                    <option value="">{t('booking:fields.select_nationality')}</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.nationality && <p className="text-red-500 text-xs italic mt-1">{errors.nationality}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passportNumber">
                    {t('booking:fields.passport_number')}
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.passportNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="passportNumber"
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    placeholder="AB1234567"
                  />
                  {errors.passportNumber && <p className="text-red-500 text-xs italic mt-1">{errors.passportNumber}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Flight Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">{t('booking:form.flight_details')}</h2>
              
              <div className="mb-6">
                <div className="flex space-x-4 mb-6">
                  <div 
                    className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${formData.tripType === 'oneWay' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => handleTripTypeChange('oneWay')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${formData.tripType === 'oneWay' ? 'border-blue-500' : 'border-gray-400'}`}>
                        {formData.tripType === 'oneWay' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                      </div>
                      <span className="font-medium">{t('booking:fields.one_way')}</span>
                    </div>
                  </div>
                  <div 
                    className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all duration-200 ${formData.tripType === 'roundTrip' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    onClick={() => handleTripTypeChange('roundTrip')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${formData.tripType === 'roundTrip' ? 'border-blue-500' : 'border-gray-400'}`}>
                        {formData.tripType === 'roundTrip' && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
                      </div>
                      <span className="font-medium">{t('booking:fields.round_trip')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="flightNumber">
                    {t('booking:fields.flight_number')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.flightNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="flightNumber"
                    type="text"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    placeholder="EK123"
                  />
                  {errors.flightNumber && <p className="text-red-500 text-xs italic mt-1">{errors.flightNumber}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="airline">
                    {t('booking:fields.airline')} *
                  </label>
                  <select
                    className={`shadow appearance-none border ${errors.airline ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="airline"
                    name="airline"
                    value={formData.airline}
                    onChange={handleChange}
                  >
                    <option value="">{t('booking:fields.select_airline')}</option>
                    {airlines.map(airline => (
                      <option key={airline} value={airline}>{airline}</option>
                    ))}
                  </select>
                  {errors.airline && <p className="text-red-500 text-xs italic mt-1">{errors.airline}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    {t('booking:fields.date')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && <p className="text-red-500 text-xs italic mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    {t('booking:fields.time')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                  {errors.time && <p className="text-red-500 text-xs italic mt-1">{errors.time}</p>}
                </div>

                {formData.tripType === 'roundTrip' && (
                  <>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
                        {t('booking:fields.return_date')} *
                      </label>
                      <input
                        className={`shadow appearance-none border ${errors.returnDate ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        id="returnDate"
                        type="date"
                        name="returnDate"
                        value={formData.returnDate || ''}
                        onChange={handleChange}
                        min={formData.date || new Date().toISOString().split('T')[0]}
                      />
                      {errors.returnDate && <p className="text-red-500 text-xs italic mt-1">{errors.returnDate}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnTime">
                        {t('booking:fields.return_time')} *
                      </label>
                      <input
                        className={`shadow appearance-none border ${errors.returnTime ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                        id="returnTime"
                        type="time"
                        name="returnTime"
                        value={formData.returnTime || ''}
                        onChange={handleChange}
                      />
                      {errors.returnTime && <p className="text-red-500 text-xs italic mt-1">{errors.returnTime}</p>}
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
                    {t('booking:fields.passengers')}
                  </label>
                  <select
                    className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialRequests">
                    {t('booking:fields.special_requests')}
                  </label>
                  <textarea
                    className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    id="specialRequests"
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder={t('booking:fields.special_requests_placeholder') as string}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Service Selection */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">{t('booking:form.service_selection')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {services.map(service => (
                  <motion.div 
                    key={service.id} 
                    className={`border rounded-lg p-5 hover:shadow-md transition-all duration-300 ${formData.selectedServices.includes(service.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id={service.id}
                        checked={formData.selectedServices.includes(service.id)}
                        onChange={() => handleServiceToggle(service.id)}
                        className="mt-1 mr-3 h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                      />
                      <div>
                        <label htmlFor={service.id} className="font-bold text-lg cursor-pointer flex items-center">
                          <span className="mr-2">{service.icon}</span>
                          {service.name}
                        </label>
                        <p className="text-gray-600 text-sm my-2">{t(`services:descriptions.${service.id}`)}</p>
                        <p className="text-blue-600 font-semibold mt-2">${service.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-6 p-5 bg-gray-50 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between font-bold text-lg">
                  <span>{t('booking:summary.total')}:</span>
                  <span className="text-blue-600">${calculateTotal()}</span>
                </div>
                {formData.selectedServices.length === 0 && (
                  <p className="text-gray-500 text-sm mt-2">{t('booking:summary.no_services')}</p>
                )}
              </motion.div>
            </motion.div>
          )}

          {/* Step 4: Payment Details */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">{t('booking:form.payment_details')}</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Payment Method Selection */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-3">
                    {t('booking:fields.payment_method') || 'Payment Method'} *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${formData.paymentMethod === 'mastercard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'mastercard'})}
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <img src="/images/mastercard.jpg" alt="Mastercard" className="w-10 h-10 object-contain" />
                      </div>
                      <span className="font-medium">Mastercard</span>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${formData.paymentMethod === 'creditCard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'creditCard'})}
                    >
                      <div className="w-12 h-12 flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-10 h-10 text-blue-600">
                          <path fill="currentColor" d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"/>
                        </svg>
                      </div>
                      <span className="font-medium">Credit Card</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                    {t('booking:fields.card_number')} *
                  </label>
                  <div className="relative">
                    <input
                      className={`shadow appearance-none border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                    />
                    <div className="absolute right-3 top-3">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                  {errors.cardNumber && <p className="text-red-500 text-xs italic mt-1">{errors.cardNumber}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardName">
                    {t('booking:fields.card_name')} *
                  </label>
                  <input
                    className={`shadow appearance-none border ${errors.cardName ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                  {errors.cardName && <p className="text-red-500 text-xs italic mt-1">{errors.cardName}</p>}
                </div>

                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 px-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
                      {t('booking:fields.expiry_date')} *
                    </label>
                    <input
                      className={`shadow appearance-none border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      id="expiryDate"
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleExpiryDateChange}
                      maxLength={5}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs italic mt-1">{errors.expiryDate}</p>}
                  </div>
                  <div className="w-1/2 px-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                      {t('booking:fields.cvv')} *
                    </label>
                    <input
                      className={`shadow appearance-none border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                      id="cvv"
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleCvvChange}
                      maxLength={4}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs italic mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="savePaymentInfo"
                      checked={formData.savePaymentInfo}
                      onChange={handleChange}
                      className="h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">{t('booking:fields.save_payment_info')}</span>
                  </label>
                </div>
              </div>

              <div className="mt-6 p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3">{t('booking:summary.order_summary')}</h3>
                {formData.selectedServices.length > 0 ? (
                  <>
                    {formData.selectedServices.map(serviceId => {
                      const service = services.find(s => s.id === serviceId);
                      return (
                        <div key={serviceId} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                          <span className="flex items-center">
                            <span className="mr-2">{service?.icon}</span>
                            {service?.name}
                          </span>
                          <span>${service?.price}</span>
                        </div>
                      );
                    })}
                    <div className="border-t mt-3 pt-3 flex justify-between font-bold text-lg">
                      <span>{t('booking:summary.total')}:</span>
                      <span className="text-blue-600">${calculateTotal()}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500">{t('booking:summary.no_services')}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <motion.button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('common:buttons.back')}
            </motion.button>
          )}
          {step < 4 ? (
            <motion.button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline ml-auto transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('common:buttons.next')}
            </motion.button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`${isSubmitting ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline ml-auto transition-colors duration-300`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('common:buttons.processing')}
                </span>
              ) : t('common:buttons.submit')}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;