import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
  msgSuccess: "",
};

const PostsSlice = createSlice({
  name: "postLists",
  initialState,
  reducers: {
    fetchPostLoading: (state) => {
      state.isLoading = true;
    },
    fetchPostSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    fetchPostFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // FETCH SINGLE POST
    fetchSinglePostLoading: (state) => {
      state.isLoading = true;
    },
    fetchSinglePostSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    fetchSinglePostFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete post
    deletePostLoading: (state) => {
      state.isLoading = true;
    },
    deletePostSuccess: (state, action) => {
      state.isLoading = true;
      state.msgSuccess = action.payload;
    },
    deletePostFail: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = PostsSlice;

export const {
  fetchPostLoading,
  fetchPostSuccess,
  fetchPostFail,
  fetchSinglePostLoading,
  fetchSinglePostSuccess,
  fetchSinglePostFail,
  deletePostLoading,
  deletePostSuccess,
  deletePostFail,
} = actions;
export default reducer;
