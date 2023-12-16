import "./styles.css";
import TodoEntryForm from "./components/TodoEntryForm";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

export default function App() {
  const { todos, pendingTodo } = useSelector((state) => ({ ...state }));

  return (
    <section className="App bg-gray-100 h-screen flex items-center justify-center">
      <section className="container bg-white p-5 max-w-lg rounded-sm">
        <h1 className="text-3xl font-bold text-left text-slate-600">Todo</h1>
        <p className="text-left text-slate-400 text-sm pl-1">
          You have {pendingTodo} pending tasks
        </p>
        <hr className="mt-5" />

        <TodoEntryForm />

        {todos.map((obj) => {
          return (
            <TodoItem
              key={obj.id}
              id={obj.id}
              text={obj.text}
              completed={obj.completed}
            />
          );
        })}
      </section>
    </section>
  );
}
