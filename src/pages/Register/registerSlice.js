import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    registerPending: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    registerFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    resetMessage: (state) => {
      state.message = "";
    },
  },
});

const { reducer, actions } = registerSlice;
export const { registerPending, registerSuccess, registerFail, resetMessage } =
  actions;

export default reducer;
