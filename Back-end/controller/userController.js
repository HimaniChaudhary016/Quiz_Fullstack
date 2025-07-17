const User = require('../model/userModel')

function getMyNameController(req, res, next) {
  res.json({
    name: 'Himani Chaudhary',
    country: 'Nepal',
  })
}

async function createUserController(req, res) {
  // Extract user data from request body
  const { name, email, username, password } = req.body;

  const userData = {
    name: name,
    email: email,
    username: username,
    password: password,
  };

  const user = new User(userData);
  await user.save();

  res.status(201).json({
    message: 'User registered successfully',
    user: user,
  });
}

module.exports = {
  getMyNameController,
  createUserController,
}