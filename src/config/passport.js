const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/user.model');
const { isValidPassword } = require('../utils/hash');

module.exports = function (passport) {
    // Estrategia local (login con email y password)
    passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user)
            return done(null, false, { message: 'User not found' });
        if (!isValidPassword(user, password))
            return done(null, false, { message: 'Invalid credentials' });
        return done(null, user);
    } catch (err) {
        return done(err);
    }
    }));

    // Estrategia JWT para proteger rutas
    const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'changeme'
    };

    passport.use('jwt', new JWTStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.id).select('-password');
        if (user)
            return done(null, user);
        return done(null, false);
    } catch (err) {
        return done(err, false);
    }
    }));
};
