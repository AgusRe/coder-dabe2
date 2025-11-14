const { generateToken } = require('../services/jwt.service');

exports.login = async (req, res) => {
    const user = req.user;
    const payload = { id: user._id, email: user.email, role: user.role };
    const token = generateToken(payload);
    res.json({
    status: 'success',
    token,
    user: {
        id: user._id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role
    }
    });
};

exports.current = (req, res) => {
    if (!req.user) return res.status(401).json({ status: 'error', message: 'Not authenticated' });
    res.json({ status: 'success', user: req.user });
};
