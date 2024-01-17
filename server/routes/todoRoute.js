const express = require('express');
const { todoValidation } = require('../middlewares/todoValidation');

const {
  getAllTodos,
  addNewTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require('../controlles/todoContoroller');

const router = express.Router();


router.route('/')
  .post(todoValidation(), addNewTodo)
  .get(getAllTodos);


router.route('/:id')
  .get(getOneTodo)
  .patch(todoValidation(), updateTodo)
  .delete(deleteTodo);

module.exports = router;



