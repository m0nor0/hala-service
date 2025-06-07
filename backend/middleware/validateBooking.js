const Joi = require('joi');

const bookingSchema = Joi.object({
  // Passenger Details
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required',
    'any.required': 'First name is required'
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required',
    'any.required': 'Last name is required'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'string.empty': 'Email is required',
    'any.required': 'Email is required'
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'Phone number is required',
    'any.required': 'Phone number is required'
  }),
  nationality: Joi.string().required().messages({
    'string.empty': 'Nationality is required',
    'any.required': 'Nationality is required'
  }),
  passportNumber: Joi.string().required().messages({
    'string.empty': 'Passport number is required',
    'any.required': 'Passport number is required'
  }),
  
  // Flight Details
  flightNumber: Joi.string().required().messages({
    'string.empty': 'Flight number is required',
    'any.required': 'Flight number is required'
  }),
  airline: Joi.string().required().messages({
    'string.empty': 'Airline is required',
    'any.required': 'Airline is required'
  }),
  tripType: Joi.string().valid('oneWay', 'roundTrip').required().messages({
    'string.empty': 'Trip type is required',
    'any.required': 'Trip type is required',
    'any.only': 'Trip type must be either oneWay or roundTrip'
  }),
  departureDate: Joi.date().iso().required().messages({
    'date.base': 'Departure date must be a valid date',
    'any.required': 'Departure date is required'
  }),
  departureTime: Joi.string().required().messages({
    'string.empty': 'Departure time is required',
    'any.required': 'Departure time is required'
  }),
  returnDate: Joi.when('tripType', {
    is: 'roundTrip',
    then: Joi.date().iso().required().messages({
      'date.base': 'Return date must be a valid date',
      'any.required': 'Return date is required for round trip'
    }),
    otherwise: Joi.date().iso().optional()
  }),
  returnTime: Joi.when('tripType', {
    is: 'roundTrip',
    then: Joi.string().required().messages({
      'string.empty': 'Return time is required for round trip',
      'any.required': 'Return time is required for round trip'
    }),
    otherwise: Joi.string().optional()
  }),
  
  // Service Details
  selectedServices: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      price: Joi.number().required(),
      quantity: Joi.number().integer().min(1).default(1)
    })
  ).min(1).required().messages({
    'array.min': 'At least one service must be selected',
    'any.required': 'Selected services are required'
  }),
  
  // Payment Details
  paymentMethod: Joi.string().valid('mastercard', 'creditCard').default('mastercard'),
  cardNumber: Joi.when('paymentMethod', {
    is: 'creditCard',
    then: Joi.string().required().messages({
      'string.empty': 'Card number is required',
      'any.required': 'Card number is required'
    }),
    otherwise: Joi.string().optional()
  }),
  cardName: Joi.when('paymentMethod', {
    is: 'creditCard',
    then: Joi.string().required().messages({
      'string.empty': 'Name on card is required',
      'any.required': 'Name on card is required'
    }),
    otherwise: Joi.string().optional()
  }),
  cardExpiry: Joi.when('paymentMethod', {
    is: 'creditCard',
    then: Joi.string().required().messages({
      'string.empty': 'Card expiry date is required',
      'any.required': 'Card expiry date is required'
    }),
    otherwise: Joi.string().optional()
  }),
  cardCVV: Joi.when('paymentMethod', {
    is: 'creditCard',
    then: Joi.string().required().messages({
      'string.empty': 'Card CVV is required',
      'any.required': 'Card CVV is required'
    }),
    otherwise: Joi.string().optional()
  }),
  savePaymentInfo: Joi.boolean().default(false),
  
  // Total Price
  totalPrice: Joi.number().required().messages({
    'number.base': 'Total price must be a number',
    'any.required': 'Total price is required'
  })
});

const validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body, { abortEarly: false });
  
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errorMessages
    });
  }
  
  next();
};

module.exports = validateBooking;