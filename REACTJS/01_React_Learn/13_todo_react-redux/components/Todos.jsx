import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center my-8 mx-4">
        Todos
      </div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="m-4 text-white bg-gray-500 p-5 rounded-md relative"
        >
          {todo.text}
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="absolute right-3 top-0 text-white bg-red-500 border-0 py-2 px-6 m-3 focus:outline-none hover:bg-red-600 rounded text-lg "
          >
            X
          </button>
        </li>
      ))}
    </>
  );
}

export default Todos;
