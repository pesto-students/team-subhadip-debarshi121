import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: {
    min: 0,
    max: 5000
  },
  ratings: [],
  discounts: [],
  sortBy: "popularity"
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = { ...state.price, ...action.payload };
    },
    addRatings: (state, action) => {
      state.ratings = [...state.ratings, action.payload];
    },
    removeRatings: (state, action) => {
      const newRatings = state.ratings.filter(
        (star) => star !== action.payload
      );
      state.ratings = newRatings;
    },
    addDiscounts: (state, action) => {
      state.discounts = [...state.discounts, action.payload];
    },
    removeDiscounts: (state, action) => {
      const newDiscounts = state.discounts.filter(
        (discount) => discount !== action.payload
      );
      state.discounts = newDiscounts;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    resetFilterSort: (state, action) => {
      return initialState;
    }
  }
});

export const {
  setPrice,
  addRatings,
  removeRatings,
  addDiscounts,
  removeDiscounts,
  setSortBy,
  resetFilterSort
} = filterSortSlice.actions;

export default filterSortSlice.reducer;
