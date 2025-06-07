/**
 * API service for making requests to the backend
 */

// Base URL for API requests
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

/**
 * Interface for API response
 */
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  errorType?: 'validation' | 'payment' | 'service' | 'invalid_code' | 'expired' | 'max_attempts' | 'not_found';
  fieldErrors?: Record<string, string>;
}

/**
 * Interface for booking data
 */
export interface BookingData {
  // Passenger Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber: string;
  
  // Flight Details
  flightNumber: string;
  airline: string;
  tripType: 'oneWay' | 'roundTrip';
  departureDate: string;
  departureTime: string;
  returnDate?: string;
  returnTime?: string;
  
  // Service Details
  selectedServices: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  
  // Payment Details
  paymentMethod: 'mastercard' | 'creditCard';
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCVV?: string;
  savePaymentInfo?: boolean;
  
  // Booking Status
  totalPrice: number;
}

/**
 * Interface for booking response
 */
export interface BookingResponse {
  booking: {
    _id: string;
    referenceNumber: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    [key: string]: any;
  };
  referenceNumber: string;
  verificationCode?: string; // Added for payment verification
}

/**
 * Interface for payment verification
 */
export interface PaymentVerificationData {
  referenceNumber: string;
  verificationCode: string;
}

/**
 * Create a new booking
 * @param bookingData - The booking data
 * @returns Promise with the booking response
 */
export const createBooking = async (bookingData: BookingData): Promise<ApiResponse<BookingResponse>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating booking:', error);
    return {
      success: false,
      message: 'Failed to create booking',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Get a booking by reference number
 * @param referenceNumber - The booking reference number
 * @returns Promise with the booking response
 */
export const getBookingByReference = async (referenceNumber: string): Promise<ApiResponse<BookingResponse>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings/reference/${referenceNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching booking:', error);
    return {
      success: false,
      message: 'Failed to fetch booking',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Verify payment for a booking
 * @param verificationData - The payment verification data
 * @returns Promise with the verification response
 */
export const verifyPayment = async (verificationData: PaymentVerificationData): Promise<ApiResponse<BookingResponse>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/bookings/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(verificationData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    return {
      success: false,
      message: 'Failed to verify payment',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};