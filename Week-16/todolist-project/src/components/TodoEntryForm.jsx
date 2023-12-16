import { addTodo } from "../redux/todo/todoActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const TodoEntryForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: todo, completed: false }));
    setTodo("");
  };

  return (
    <section className="flex gap-3 my-5">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="p-3 rounded-sm border border-gray-200 flex-1 focus:outline-none focus:border-blue-300"
      />
      <button
        onClick={handleAddTodo}
        title="Add Todo"
        className="bg-blue-600 text-white p-3 rounded-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </section>
  );
};

export default TodoEntryForm;
