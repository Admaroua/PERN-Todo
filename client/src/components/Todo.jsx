
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import PropTypes from 'prop-types';
function Todo(props) {
  
  return (
    <div className={`flex items-center justify-between w-full border border-slate-100 mb-4 p-4 bg-white`}>
        <p className='capitalize'>{props.description}</p>
        <div className='flex justify-between items-center gap-2 text-xl'>
            
            <div ><MdOutlineModeEditOutline className='text-yellow-400 cursor-pointer' /></div>
            <div ><MdDeleteOutline className='text-red-600 cursor-pointer' onClick={props.delete} /></div>
            
            <input type="checkbox" className='h-4 w-4'/>
        </div>
    </div>
  )
}
Todo.propTypes = {
  description: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  delete:PropTypes.func
};
export default Todo