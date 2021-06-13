import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../src/pages/posts/postsSlice";
import userRegisterReducer from "../src/pages/Register/registerSlice";
import userLoginReducer from "../src/pages/login/loginSlice";
const store = configureStore({
  reducer: {
    posts: postReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
  },
});

export default store;
