import {
  deleteTodo,
  markCompleted,
  markPending
} from "../redux/todo/todoActions";
import { useDispatch } from "react-redux";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  const handleMarkPending = (id) => {
    dispatch(markPending(id));
  };

  return (
    <section
      className={`flex mt-2 rounded-sm ${
        completed
          ? "bg-gray-50 hover:bg-gray-100"
          : "bg-green-50 hover:bg-green-100"
      }`}
    >
      <div className="flex-1 p-2">
        <p className="text-left text-slate-600">{text}</p>
      </div>
      <div className="flex p-2 items-start justify-between gap-1">
        {!completed && (
          <button
            onClick={() => handleMarkCompleted(id)}
            title="Mark as completed"
            className="p-1 h-6 w-6 rounded-full bg-green-500 hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
        )}

        {completed && (
          <button
            onClick={() => handleMarkPending(id)}
            title="Mark as Pending"
            className="p-1 h-6 w-6 rounded-full bg-gray-500 hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <button
          title="Delete"
          onClick={() => handleDeleteTodo(id)}
          className="p-1 h-6 w-6 rounded-full bg-red-400 hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TodoItem;
