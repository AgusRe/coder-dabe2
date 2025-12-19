import jwt from 'jsonwebtoken';
import UserDTO from '../dto/user.dto.js';

export const login = (req, res) => {
  try {
    const user = req.user;

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        email: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({
      status: 'success',
      token
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const current = (req, res) => {
  const safeUser = new UserDTO(req.user);
  res.json({ status: 'success', user: safeUser });
};
