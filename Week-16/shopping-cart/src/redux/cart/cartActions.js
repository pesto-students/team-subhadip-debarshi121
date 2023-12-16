import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY_CART
} from "./cartTypes";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  };
};

export const removeProductFromCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId
  };
};

export const updateProductQuantityCart = (productId, qty) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY_CART,
    payload: { productId, qty }
  };
};
