# API Integration Guide

## Overview

This document provides instructions on how to set up and use the API integration between the frontend and backend of the Hala Service application.

## Setup

### Backend Setup

1. Create a `.env` file in the `backend` directory with the following content:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
```

2. Install dependencies and start the backend server:

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

1. Create a `.env` file in the `frontend` directory with the following content:

```
REACT_APP_API_URL=http://localhost:5000
```

2. Install dependencies and start the frontend development server:

```bash
cd frontend
npm install
npm start
```

## API Endpoints

The following API endpoints are available for the booking service:

### Bookings

- **Create Booking**
  - Method: `POST`
  - URL: `/api/bookings`
  - Description: Create a new booking

- **Get All Bookings**
  - Method: `GET`
  - URL: `/api/bookings`
  - Description: Get all bookings

- **Get Booking by ID**
  - Method: `GET`
  - URL: `/api/bookings/:bookingId`
  - Description: Get a single booking by ID

- **Get Booking by Reference Number**
  - Method: `GET`
  - URL: `/api/bookings/reference/:referenceNumber`
  - Description: Get a booking by reference number

- **Update Booking**
  - Method: `PUT`
  - URL: `/api/bookings/:bookingId`
  - Description: Update a booking

- **Delete Booking**
  - Method: `DELETE`
  - URL: `/api/bookings/:bookingId`
  - Description: Delete a booking

- **Update Booking Status**
  - Method: `PATCH`
  - URL: `/api/bookings/:bookingId/status`
  - Description: Update a booking's status

## Frontend API Service

The frontend uses a service module to interact with the backend API. This service is located at `frontend/src/services/api.ts`.

### Available Functions

- `createBooking(bookingData)`: Creates a new booking
- `getBookingByReference(referenceNumber)`: Gets a booking by reference number

### Usage Example

```typescript
import { createBooking } from '../services/api';

const handleSubmit = async (formData) => {
  try {
    const response = await createBooking(formData);
    if (response.success) {
      // Handle successful booking
      console.log('Booking created:', response.data);
    } else {
      // Handle error
      console.error('Error creating booking:', response.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Data Models

### Booking Model

```typescript
interface BookingData {
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
```

## Troubleshooting

### CORS Issues

If you encounter CORS issues, ensure that the backend server is running and that the `cors` middleware is properly configured in `backend/index.js`.

### API Connection Issues

If the frontend cannot connect to the backend API, check the following:

1. Ensure the backend server is running
2. Verify that the `REACT_APP_API_URL` in the frontend `.env` file is correct
3. Check the browser console for any error messages

### MongoDB Connection

If you're using a real MongoDB database (not the mock implementation), ensure that your MongoDB connection string in the backend `.env` file is correct and that your MongoDB server is running.