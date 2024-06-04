const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../db');
const { SECRET_KEY } = process.env;

const loginHandler = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '20h' });
  res.json({ token });
};

const protectedRouteHandler = (req, res) => {
  res.json({ message: 'Welcome to the admin panel' });
};

module.exports = {
  loginHandler,
  protectedRouteHandler
};
