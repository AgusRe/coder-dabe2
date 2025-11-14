const User = require('../models/user.model');
const { createHash } = require('../utils/hash');

exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password, cart, role } = req.body;
        const exists = await User.findOne({ email });
        if (exists) return res.status(400).json({ status: 'error', message: 'Email already registered' });
        const user = await User.create({
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
            cart,
            role
        });
        res.status(201).json({ status: 'success', user });
    } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
    }
};

exports.getUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json({ status: 'success', users });
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.uid).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

exports.updateUser = async (req, res) => {
    const updates = { ...req.body };
    if (updates.password) delete updates.password;
    const user = await User.findByIdAndUpdate(req.params.uid, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.uid);
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', message: 'User deleted' });
};
