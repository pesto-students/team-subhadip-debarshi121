import { createStore } from "redux";
import { cartReducer } from "./cart/cartReducer";

const store = createStore(cartReducer);

export default store;
