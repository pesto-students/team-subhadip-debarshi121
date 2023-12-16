import {
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETED,
  MARK_PENDING
} from "./todoTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};

export const markCompleted = (todoId) => {
  return {
    type: MARK_COMPLETED,
    payload: todoId
  };
};

export const markPending = (todoId) => {
  return {
    type: MARK_PENDING,
    payload: todoId
  };
};
