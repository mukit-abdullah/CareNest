const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');
const { notFound, errorHandler } = require('./server/middleware/errorMiddleware');
const userRoutes = require('./server/routes/userRoutes');
const residentRoutes = require('./server/routes/residentRoutes');
const staffRoutes = require('./server/routes/staffRoutes');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/residents', residentRoutes);
app.use('/api/staff', staffRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// Set port and listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
