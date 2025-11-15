import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import configurePassport from './config/passport.js';

import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport
configurePassport();
app.use(passport.initialize());

// Routes
app.use('/api/users', usersRouter);
app.use('/api/sessions', sessionsRouter);

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL;

try {
  await mongoose.connect(MONGO_URL, { dbName: 'ecommerce' });
  console.log('MongoDB connected successfully!');
} catch (err) {
  console.error('❌ Error de conecxión en con MongoDB:', err);
}

// Start server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
