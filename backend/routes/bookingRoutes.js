const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const validateBooking = require('../middleware/validateBooking');

// Create a new booking
router.post('/', validateBooking, bookingController.createBooking);

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Get a single booking by ID
router.get('/:id', bookingController.getBookingById);

// Get a booking by reference number
router.get('/reference/:referenceNumber', bookingController.getBookingByReference);

// Update a booking
router.put('/:id', validateBooking, bookingController.updateBooking);

// Delete a booking
router.delete('/:id', bookingController.deleteBooking);

// Update booking status
router.patch('/:id/status', bookingController.updateBookingStatus);

// Verify payment for a booking
router.post('/verify-payment', bookingController.verifyPayment);

module.exports = router;