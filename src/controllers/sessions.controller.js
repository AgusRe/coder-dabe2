import UserDTO from '../dto/user.dto.js';

export const current = (req, res) => {
  const safeUser = new UserDTO(req.user);
  res.json({ status: 'success', user: safeUser });
};
