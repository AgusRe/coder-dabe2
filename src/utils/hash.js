const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10');

function createHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
}

function isValidPassword(user, password) {
    return bcrypt.compareSync(password, user.password);
}

module.exports = { createHash, isValidPassword };
