import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postToCart, updateCart, getCart } from "../../utils/apis";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  try {
    const resData = await getCart(userId);
    return resData;
  } catch (error) {
    return error;
  }
});

export const addToCart = createAsyncThunk("cart/addToCart", async (data) => {
  try {
    const resData = await postToCart(data);
    return resData;
  } catch (error) {
    return error;
  }
});

export const updateToCart = createAsyncThunk(
  "cart/updateToCart",
  async ({ cartId, products }) => {
    console.log(products);
    try {
      const resData = await updateCart(cartId, products);
      return resData;
    } catch (error) {
      return error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: null,
    products: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [...action.payload.products];
        state.total = action.payload.total;
        state.discountedTotal = action.payload.discountedTotal;
        state.totalProducts = action.payload.totalProducts;
        state.totalQuantity = action.payload.totalQuantity;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = [...action.payload.products];
        state.total = action.payload.total;
        state.discountedTotal = action.payload.discountedTotal;
        state.totalProducts = action.payload.totalProducts;
        state.totalQuantity = action.payload.totalQuantity;
      })
      .addCase(updateToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload.carts[0].id;
        state.products = [...action.payload.carts[0].products];
        state.total = action.payload.carts[0].total;
        state.discountedTotal = action.payload.carts[0].discountedTotal;
        state.totalProducts = action.payload.carts[0].totalProducts;
        state.totalQuantity = action.payload.carts[0].totalQuantity;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default cartSlice.reducer;
