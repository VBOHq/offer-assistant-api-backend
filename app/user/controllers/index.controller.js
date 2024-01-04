const UserService = require('../services/index.service');
const { generateToken } = require('../utils/index.util');

const registerUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await UserService.registerUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserService.loginUser(username, password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create and return a token (use a proper library for this)
    const token = generateToken(user.user_id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const getUserProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const userProfile = await UserService.getUserById(userId);
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const updateUserProfile = async (req, res) => {
  const userId = req.user.id;
  const updatedData = req.body;

  try {
    const updatedUser = await UserService.updateUser(userId, updatedData);

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

const deleteUserProfile = async (req, res) => {
  const userId = req.user.id;

  try {
    const deletedUser = await UserService.deleteUser(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', body: error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
