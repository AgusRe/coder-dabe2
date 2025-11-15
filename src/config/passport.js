import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user.model.js';
import { isValidPassword } from '../utils/hash.js';

export default function configurePassport() {
  // Local strategy (login)
  passport.use('login', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: 'User not found' });
        if (!isValidPassword(user, password)) return done(null, false, { message: 'Invalid credentials' });
        return done(null, user);
    } catch (err) {
        return done(err);
    }
  }));

  // JWT strategy (para rutas protegidas y para "current")
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'changeme'
  }, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.id).select('-password');
        if (user) return done(null, user);
        return done(null, false);
    } catch (err) {
        return done(err, false);
    }
  }));
}
