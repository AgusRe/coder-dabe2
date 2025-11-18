import express from 'express';
import passport from 'passport';
import configurePassport from './config/passport.js';

import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport
configurePassport();
app.use(passport.initialize());

// Rutas
app.use('/api/users', usersRouter);
app.use('/api/sessions', sessionsRouter);

// Ruta base opcional
app.get('/', (req, res) => {
  res.send('API OK - /api/users & /api/sessions disponibles');
});

export default app;