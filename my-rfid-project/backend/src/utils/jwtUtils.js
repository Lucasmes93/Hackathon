const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-256-bit-secret';

exports.generateToken = (payload) => {

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

};

exports.verifyToken = (token) => {

  return jwt.verify(token, SECRET_KEY);

};

 