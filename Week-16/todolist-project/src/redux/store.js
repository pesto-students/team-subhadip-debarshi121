import { createStore } from "redux";
import { todoReducer } from "./todo/todoReducer";

const store = createStore(todoReducer);

export default store;
