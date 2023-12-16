import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import filterSortReducer from "./slices/filterSortSlice";
import cartSliceReducer from "./slices/cartSlice";
import userSliceReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    categories: categoryReducer,
    filterSort: filterSortReducer,
    user: userSliceReducer
  }
});

export default store;
