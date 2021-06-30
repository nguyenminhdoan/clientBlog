import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  user: {},
  msgSuccess: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
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
    resetMessage: (state) => {
      state.error = "";
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
  resetMessage,
} = actions;

export default reducer;
