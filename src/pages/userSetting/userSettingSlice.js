import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  msgSuccess: "",
};

const UserProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    fetchUpdateLoading: (state) => {
      state.isLoading = true;
    },
    fetchUpdateSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.msgSuccess = payload;
    },
    fetchUpdateFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = UserProfileSlice;

export const { fetchUpdateFail, fetchUpdateLoading, fetchUpdateSuccess } =
  actions;

export default reducer;
