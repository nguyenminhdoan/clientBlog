import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../src/pages/posts/postsSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
