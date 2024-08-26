// routes/auth.routes.js
import express from 'express';
import { body } from 'express-validator';
import { signUp, signIn } from '../Controller/user.controller.js';

const router = express.Router();

// Validation middleware
const signupValidation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const signinValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

router.post('/signup', signupValidation, signUp);
router.post('/signin', signinValidation, signIn);

export default router;
