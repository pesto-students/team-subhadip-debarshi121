import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY_CART
} from "./cartTypes";

const initialState = {
  cartItems: [],
  totalPrice: 0
};

const calculateTotalPrice = (items) => {
  const initialValue = 0;
  const total = items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    initialValue
  );
  return total.toFixed(2);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      if (!state.cartItems.find((obj) => obj.id === action.payload.id)) {
        const product = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, product],
          totalPrice: calculateTotalPrice([...state.cartItems, product])
        };
      }
      return state;
    case REMOVE_PRODUCT_FROM_CART:
      const removed = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      return {
        ...state,
        cartItems: removed,
        totalPrice: calculateTotalPrice(removed)
      };
    case UPDATE_PRODUCT_QUANTITY_CART:
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === action.payload.productId) {
          return { ...item, quantity: action.payload.qty };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedItems,
        totalPrice: calculateTotalPrice(updatedItems)
      };
    default:
      return state;
  }
};
