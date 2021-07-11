import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  msg: null,
  searchPostsList: [],
  status: "",
  pagination: [],
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
      state.msg = action.payload;
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
      state.msg = action.payload;
    },

    // delete post
    deletePostLoading: (state) => {
      state.isLoading = true;
    },
    deletePostSuccess: (state, action) => {
      state.isLoading = true;
      state.msg = action.payload;
    },
    deletePostFail: (state, action) => {
      state.isLoading = true;
      state.msg = action.payload;
    },
    createPostLoading: (state) => {
      state.isLoading = true;
    },
    createPostSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.msg = payload;
      state.status = "success";
    },
    createPostFail: (state, { payload }) => {
      state.isLoading = false;
      state.msg = payload;
    },
    paginateLoading: (state) => {
      state.isLoading = true;
    },
    paginateSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.pagination = payload;
    },
    paginateFail: (state) => {
      state.isLoading = false;
    },
    // searchPost: (state, action) => {
    //   state.searchPostsList = state.posts.filter((post) => {
    //     if (!action.payload) return post;
    //     return post.title.toLowerCase().includes(action.payload.toLowerCase());
    //   });
    // },
    searchPostLoading: (state) => {
      state.isLoading = true;
    },
    searchPostSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.searchPostsList = payload;
    },
    searchPostFail: (state, { payload }) => {
      state.isLoading = false;
      state.msg = payload;
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
  searchPost,
  createPostLoading,
  createPostSuccess,
  createPostFail,
  paginateLoading,
  paginateFail,
  paginateSuccess,
  searchPostLoading,
  searchPostSuccess,
  searchPostFail,
} = actions;
export default reducer;
