import { useState } from "react";

function TodoInput() {
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
        const body = { description };
        await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        
      
      window.location='/'
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form className='w-full flex flex-col gap-4 mt-4' onSubmit={onSubmitForm}>
      <input
        type='text'
        value={description}
        className='w-full p-2 border border-black rounded-md outline-none'
        onChange={handleChange}
      />
      <button className='w-full font-semibold border border-black text-white bg-black h-10 rounded-md'>
        Add task
      </button>
    </form>
  );
}

export default TodoInput;
