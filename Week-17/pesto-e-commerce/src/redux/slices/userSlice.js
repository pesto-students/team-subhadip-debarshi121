import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../../utils/apis";

export const login = createAsyncThunk("user/login", async (data) => {
  try {
    const resData = await postLogin(data);
    return resData;
  } catch (error) {
    return error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    status: "idle",
    error: null,
    isLoggedIn: localStorage.getItem("user") ? true : false
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isLoggedIn = false;
      });
  }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
