
const { body } = require('express-validator');

const todoValidation = () => {
  return body('description').notEmpty().withMessage('Description is required');
};

module.exports = {
  todoValidation,
};
