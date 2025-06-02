import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <section className="max-w-xl mx-auto mt-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">📝 Your Tasks</h2>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Start adding some!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 rounded-xl px-5 py-3 shadow-md transition hover:shadow-lg"
            >
              <span className="text-lg text-white">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="p-2 rounded-full text-red-400 hover:text-red-600 transition"
                aria-label="Delete Todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todos;
