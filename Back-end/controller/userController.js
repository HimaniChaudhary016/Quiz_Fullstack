const User = require('../model/userModel')

function getMyNameController(req, res, next) {
  res.json({
    name: 'Himani Chaudhary',
    country: 'Nepal',
  })
}

async function createUserController(req, res) {
  const data = {
    name: 'Rohan',
    email: 'rohan@mail.com',
    password: 'password',
  }
  
  const user = new User(data);
  await user.save();
  
  res.status(201).json({
    message: 'User created successfully',
    user: user,
  });
}

module.exports = {
  getMyNameController,
  createUserController,
}