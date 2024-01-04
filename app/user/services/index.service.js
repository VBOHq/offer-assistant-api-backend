const User = require('../models/index.model');

const registerUser = async (userData) => {
  return await User.create(userData);
};

const loginUser = async (username, password) => {
  return await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });
};

const getUserById = async (userId) => {
  return await User.findByPk(userId);
};

const updateUser = async (userId, updatedData) => {
  const user = await User.findByPk(userId);

  if (!user) {
    return null;
  }

  return await user.update(updatedData);
};

const deleteUser = async (userId) => {
  const user = await User.findByPk(userId);

  if (!user) {
    return null;
  }

  await user.destroy();
  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
};
