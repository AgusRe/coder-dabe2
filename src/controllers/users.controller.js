import User from '../models/user.model.js';
import { createHash } from '../utils/hash.js';

export const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, age, password, cart, role } = req.body;
        if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }
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
        // Nunca retornar la contraseña
        const userSafe = user.toObject();
        delete userSafe.password;
        res.status(201).json({ status: 'success', user: userSafe });
    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};

export const getUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json({ status: 'success', users });
};

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.uid).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

export const updateUser = async (req, res) => {
    const updates = { ...req.body };
    if (updates.password) delete updates.password; // password change via dedicated endpoint
    const user = await User.findByIdAndUpdate(req.params.uid, updates, { new: true }).select('-password');
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', user });
};

export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.uid);
    if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });
    res.json({ status: 'success', message: 'User deleted' });
};
