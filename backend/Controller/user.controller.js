// controllers/auth.controller.js
import { validationResult } from 'express-validator';
import User from '../Model/user.model.js'; // Adjust the path as necessary

export const signUp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    const token = user.generateToken();
    res.status(201).json({ message: 'User created', user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email' });
    }

    const isPasswordValid = await User.checkPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = user.generateToken();
    res.status(200).json({ message: 'Sign in success', token ,UserID:user.id});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
