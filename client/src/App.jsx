import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className='container relative w-[800px] h-[600px] bg-white border rounded-md flex flex-col items-center p-6 overflow-hidden'>
       <h2 className='text-3xl font-semibold'>To Do list</h2>
    <TodoInput/>
    <TodoList/>
    </div>
   
  )
}
