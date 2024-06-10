import { body, param, validationResult } from "express-validator"
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import Product from "../models/Product.js";
import Order from "../models/Order.js";

const withValidateErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith('no product')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateProductInput = withValidateErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('company').notEmpty().withMessage('company is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('colors').notEmpty().withMessage('color is required'),
  body('price').notEmpty().withMessage('price is required'),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateRegisterInput = withValidateErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateLoginInput = withValidateErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidateErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError('email already exists');
      }
    }),

  body('location').notEmpty().withMessage('location is required'),
]);

export const validateParam = withValidateErrors([
  param('id')
    .custom(async (value) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidId) throw new BadRequestError('invalid MongsoDB id');
      const product = await Product.findById(value);
      if (!product) throw new NotFoundError(`no product with id : ${value}`);
    }),
]);

export const validateParamOrder = withValidateErrors([
  param('id')
    .custom(async (value) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (!isValidId) throw new BadRequestError('invalid MongsoDB id');
      const order = await Order.findById(value);
      if (!order) throw new NotFoundError(`no order with id : ${value}`);
    }),
]);

export const validateOrderInput = withValidateErrors([
  body('location').notEmpty().withMessage('location is required'),
]);