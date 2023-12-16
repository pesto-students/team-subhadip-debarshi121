import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../utils/apis";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const data = await getCategories();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = [...action.payload];
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default categorySlice.reducer;
