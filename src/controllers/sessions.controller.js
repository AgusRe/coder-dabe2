import { generateToken } from '../services/jwt.service.js';

export const login = (req, res) => {
    // passport 'login' strategy will attach user to req.user
    const user = req.user;
    const payload = { id: user._id, email: user.email, role: user.role };
    const token = generateToken(payload);
    res.json({
        status: 'success',
        token,
        user: { id: user._id, first_name: user.first_name, last_name: user.last_name, email: user.email, role: user.role }
    });
};

export const current = (req, res) => {
    if (!req.user) return res.status(401).json({ status: 'error', message: 'Not authenticated' });
    res.json({ status: 'success', user: req.user });
};
