import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.error = "";
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = loginSlice;

export const {
  loginPending,
  loginSuccess,
  loginFail,
  logout,
  getUserPending,
  getUserSuccess,
  getUserFail,
} = actions;

export default reducer;
