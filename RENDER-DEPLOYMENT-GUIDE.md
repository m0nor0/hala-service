# Render Deployment Guide for Hala Service

## Overview

This guide will help you deploy the Hala Service application to Render, a cloud platform that offers free hosting for web services. The application consists of a Node.js backend and a React frontend, with MongoDB Atlas as the database.

## Prerequisites

1. A Render account (sign up at [render.com](https://render.com))
2. A MongoDB Atlas account (sign up at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas))
3. Your project code pushed to a GitHub repository

## Step 1: Set Up MongoDB Atlas

1. Log in to your MongoDB Atlas account
2. Create a new project (if you don't have one already)
3. Create a new cluster (the free tier is sufficient for development)
4. Once your cluster is created, click on "Connect"
5. Choose "Connect your application"
6. Select Node.js as the driver and copy the connection string
7. **Important**: Replace `<password>` in the connection string with your actual database user password (not your MongoDB Atlas account password)

## Step 2: Deploy the Backend to Render

1. Log in to your Render account
2. Click on "New" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `hala-service-api` (or any name you prefer)
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node index.js`
5. Under "Advanced" settings, add the following environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will automatically assign a port, but this is used internally)
   - `MONGODB_URI`: Your MongoDB Atlas connection string (from Step 1)
   - `JWT_SECRET`: A secure random string for JWT token generation
   - `JWT_EXPIRE`: `30d`
   - `EMAIL_SERVICE`: Your email service provider (e.g., `gmail`)
   - `EMAIL_USERNAME`: Your email username
   - `EMAIL_PASSWORD`: Your email password or app-specific password
   - `EMAIL_FROM`: Your sender email address
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `STRIPE_PUBLIC_KEY`: Your Stripe public key
6. Select the free plan
7. Click "Create Web Service"

## Step 3: Deploy the Frontend to Render

1. In your Render dashboard, click on "New" and select "Web Service"
2. Connect your GitHub repository (same as the backend)
3. Configure the service:
   - **Name**: `hala-service-frontend` (or any name you prefer)
   - **Environment**: `Node`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Start Command**: `cd frontend && npx serve -s build`
4. Under "Advanced" settings, add the following environment variables:
   - `NODE_ENV`: `production`
   - `REACT_APP_API_URL`: The URL of your backend service (e.g., `https://hala-service-api.onrender.com`)
5. Select the free plan
6. Click "Create Web Service"

## Step 4: Using the render.yaml File (Alternative Approach)

This repository includes a `render.yaml` file that can be used to deploy both services at once:

1. In your Render dashboard, click on "New" and select "Blueprint"
2. Connect your GitHub repository
3. Render will automatically detect the `render.yaml` file and configure the services
4. You'll still need to manually set the sensitive environment variables (marked with `sync: false` in the YAML file)

## Troubleshooting

### MongoDB Connection Issues

If you encounter MongoDB connection errors:

1. Verify that your MongoDB Atlas connection string is correct
2. Ensure that your IP address is whitelisted in MongoDB Atlas (or set it to allow connections from anywhere for testing)
3. Check that you've replaced `<password>` in the connection string with your actual database user password

### Deployment Failures

If your deployment fails:

1. Check the Render logs for error messages
2. Ensure that your build and start commands are correct
3. Verify that all required environment variables are set

### Frontend Cannot Connect to Backend

If your frontend cannot connect to the backend:

1. Ensure that the `REACT_APP_API_URL` environment variable is set correctly
2. Check that your backend service is running
3. Verify that CORS is properly configured in your backend code

## Security Considerations

1. Never commit sensitive information (like API keys, passwords, or connection strings) to your repository
2. Use environment variables for all sensitive information
3. Consider using a service like [Render's Secret Files](https://render.com/docs/secret-files) for managing sensitive configuration

## Monitoring and Scaling

1. Monitor your application's performance and logs through the Render dashboard
2. If you need more resources, consider upgrading to a paid plan
3. Set up alerts for important events or errors

## Support

If you encounter any issues with your Render deployment, you can:

1. Check the [Render documentation](https://render.com/docs)
2. Visit the [Render community forum](https://community.render.com)
3. Contact Render support through your dashboard