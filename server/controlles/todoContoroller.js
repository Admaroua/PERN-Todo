const pool = require("../db")
const {validationResult} = require("express-validator")
const getAllTodos= async (req,res)=>{
    try {
        const todos= await pool.query("SELECT * FROM todo")
        res.status(200).send(todos.rows)
        
    } catch (error) {
         console.log(error.message)
         res.status(500).json({ error: 'Internal Server Error' });
    }
}
const addNewTodo=async (req, res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {description}=req.body
        const newTodo= await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);
        res.status(201).send(newTodo.rows[0])
        
    } catch (error) {
       console.log(error.message) 
       res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getOneTodo = async (req,res)=>{
    try {
        const {id}=req.params
        const todo= await pool.query("SELECT todo_id, description from todo where todo_id=$1",[id])
        res.status(200).send(todo.rows[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateTodo = async (req,res)=>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try { 
        const {id}=req.params
        const {description}=req.body
        const updateTodo= await pool.query("UPDATE todo SET description =$1 WHERE todo_id = $2 RETURNING *",[description,id])
        res.status(200).send("todo was updated")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const deleteTodo = async (req,res)=>{
    const {id}=req.params
    const deleteTodo= await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
    try {
        res.send("todo was deleted")
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports={
    getAllTodos, addNewTodo,getOneTodo, updateTodo, deleteTodo
}