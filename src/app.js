import express from "express";
import passport from "passport";
import dotenv from "dotenv";

import configurePassport from "./config/passport.js";

import usersRouter from "./routes/users.router.js";
import sessionsRouter from "./routes/sessions.router.js";

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
app.use("/api/users", usersRouter);
app.use("/api/sessions", sessionsRouter);

export default app;