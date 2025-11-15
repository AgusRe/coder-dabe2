import bcrypt from 'bcrypt';
const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10');

export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(rounds));
};

export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password);
};
