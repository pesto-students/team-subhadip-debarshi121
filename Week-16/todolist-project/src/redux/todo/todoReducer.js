import {
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETED,
  MARK_PENDING
} from "./todoTypes";

const initialState = {
  todos: [],
  pendingTodo: 0
};

const countPendingTodos = (todos) => {
  const pendingTodos = todos.filter((todo) => todo.completed === false);
  return pendingTodos.length;
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
        pendingTodo: countPendingTodos(newTodos)
      };
    case DELETE_TODO:
      const newTodosAfterDelete = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: newTodosAfterDelete,
        pendingTodo: countPendingTodos(newTodosAfterDelete)
      };
    case MARK_COMPLETED:
      const todosAfterMarkCompleted = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
      return {
        ...state,
        todos: todosAfterMarkCompleted,
        pendingTodo: countPendingTodos(todosAfterMarkCompleted)
      };
    case MARK_PENDING:
      const todosAfterMarkPending = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: false };
        }
        return todo;
      });
      return {
        ...state,
        todos: todosAfterMarkPending,
        pendingTodo: countPendingTodos(todosAfterMarkPending)
      };
    default:
      return state;
  }
};
