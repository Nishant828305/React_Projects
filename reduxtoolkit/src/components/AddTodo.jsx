import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') return;
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="max-w-xl mx-auto mt-16 px-6 py-6 bg-gray-900 shadow-lg rounded-2xl flex flex-col sm:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="What's on your mind?"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        className="flex-grow bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-white placeholder-gray-400 rounded-lg py-3 px-4 transition-all duration-200"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 w-full sm:w-auto"
      >
        ➕ Add Task
      </button>
    </form>
  );
}

export default AddTodo;
