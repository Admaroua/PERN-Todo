
import Todo from './Todo'
import { useEffect,useState } from 'react'

function TodoList() {
  const [todos,setTodos]=useState([]);
  const getTodos = async ()=>{
    try {
      const response =await fetch("http://localhost:5000/todos");
      const jsonData = await response.json()
      setTodos(jsonData);
      
    } catch (error) {
      console.log(error.message);
    }
  }
  const deleteTodo = async (id)=>{
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      
      });
      setTodos(prevTodos => prevTodos.filter(todo=>todo.todo_id !==id))
    } catch (error) {
      console.log(error.message);
    }
  }
  const deleteAllTodos = async ()=>{
    try {
      await fetch(`http://localhost:5000/todos`, {
        method: 'DELETE',
        // Additional options like headers can be added here
      });
      setTodos([])
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getTodos();
  },[])
  return (

    <div className='w-full'>
      <div className=' my-8 max-h-80 overflow-auto'>
        {todos.map((todo)=><Todo key ={todo.todo_id}description={todo.description} id={todo.todo_id} delete={()=>deleteTodo(todo.todo_id)}/>)}

    </div>
    {todos.length >0 && <div className='flex justify-center bg-white z-50 absolute bottom-0 left-0 right-0'><button className='font-semibold border border-black rounded-md px-2 text-white bg-black h-10 my-4' onClick={deleteAllTodos}>Delete All</button></div>}
    </div>
  )
}

export default TodoList