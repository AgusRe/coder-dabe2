import jwt from 'jsonwebtoken';
import UsersRepository from '../repositories/users.repository.js';
import { transporter } from '../config/mailer.js';
import { createHash, isValidPassword } from '../utils/hash.js';

const usersRepo = new UsersRepository();

export const sendRecoveryMail = async (email) => {
  const user = await usersRepo.getUserByEmail(email);
  if (!user) throw new Error('User not found');

  const token = jwt.sign(
    { id: user._id },
    process.env.RESET_PASSWORD_SECRET,
    { expiresIn: '1h' }
  );

  const link = `http://localhost:3000/reset-password?token=${token}`;

  await transporter.sendMail({
    to: email,
    subject: 'Recuperar contraseña',
    html: `<a href="${link}">Restablecer contraseña</a>`
  });
};
