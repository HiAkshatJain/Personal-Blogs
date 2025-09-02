import { body } from 'express-validator';

// Interest validation
export const validateInterest = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),
];

// Experience validation
export const validateExperience = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Job title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('company')
    .trim()
    .notEmpty()
    .withMessage('Company name is required')
    .isLength({ max: 100 })
    .withMessage('Company name cannot exceed 100 characters'),
  body('duration')
    .trim()
    .notEmpty()
    .withMessage('Duration is required')
    .isLength({ max: 50 })
    .withMessage('Duration cannot exceed 50 characters'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('icon')
    .trim()
    .notEmpty()
    .withMessage('Icon is required')
    .isLength({ max: 50 })
    .withMessage('Icon cannot exceed 50 characters')
];

// Social validation
export const validateSocial = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Social platform name is required')
    .isLength({ max: 50 })
    .withMessage('Name cannot exceed 50 characters'),
  body('url')
    .trim()
    .notEmpty()
    .withMessage('URL is required')
    .isURL()
    .withMessage('Please provide a valid URL'),
  body('icon')
    .trim()
    .notEmpty()
    .withMessage('Icon is required')
    .isLength({ max: 50 })
    .withMessage('Icon cannot exceed 50 characters'),
  // body('color')
  //   .trim()
  //   .notEmpty()
  //   .withMessage('Color is required')
  //   .matches(/^#[0-9A-F]{6}$/i)
  //   .withMessage('Please provide a valid hex color code')
];

// Contact validation
export const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ max: 2000 })
    .withMessage('Message cannot exceed 2000 characters')
];

// Newsletter validation
export const validateNewsletter = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
];

// Blog validation
// export const validateBlog = [
//   body('title')
//     .trim()
//     .notEmpty()
//     .withMessage('Title is required')
//     .isLength({ max: 200 })
//     .withMessage('Title cannot exceed 200 characters'),
//   body('image')
//     .trim()
//     .notEmpty()
//     .withMessage('Image URL is required')
//     .isURL()
//     .withMessage('Please provide a valid image URL'),
//   body('excerpt')
//     .trim()
//     .notEmpty()
//     .withMessage('Excerpt is required')
//     .isLength({ max: 300 })
//     .withMessage('Excerpt cannot exceed 300 characters'),
//   body('content')
//     .trim()
//     .notEmpty()
//     .withMessage('Content is required'),
//   body('tags')
//     .optional()
//     .isArray()
//     .withMessage('Tags must be an array'),
//   body('tags.*')
//     .optional()
//     .trim()
//     .isLength({ max: 30 })
//     .withMessage('Each tag cannot exceed 30 characters'),
//   body('isPublished')
//     .optional()
//     .isBoolean()
//     .withMessage('isPublished must be a boolean')
// ];
export const validateBlog = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters'),
  body('excerpt')
    .trim()
    .notEmpty()
    .withMessage('Excerpt is required')
    .isLength({ max: 300 })
    .withMessage('Excerpt cannot exceed 300 characters'),

  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required'),

  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),

  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 30 })
    .withMessage('Each tag cannot exceed 30 characters'),

  body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be a boolean'),
];
