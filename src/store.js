import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../src/pages/posts/postsSlice";
import userRegisterReducer from "../src/pages/register/registerSlice";
import userLoginReducer from "../src/pages/login/loginSlice";
import userProfileReducer from "../src/pages/userSetting/userSettingSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userProfile: userProfileReducer,
  },
});

export default store;
