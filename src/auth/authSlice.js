import { createSlice } from "@reduxjs/toolkit";
import { LOGING_SUCCESS, LOGOUT_SUCCESS } from "./constants";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: { username: "admin", password: "12345" },
    loggedIn: false,
  },
  reducers: {
    login: (state) => {
      console.log("login button clicked")
      state= {
        ...state,
        isAuthenticated: true,
      };
    },
    logout: (state) => {
      console.log("logout done")
      return {
        ...state,
        isAuthenticated: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
