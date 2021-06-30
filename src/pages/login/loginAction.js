import {
  loginPending,
  loginSuccess,
  loginFail,
  getUserFail,
  getUserSuccess,
  getUserPending,
} from "./loginSlice";
import { loginUser, getUserProfile } from "../../api/userAPI";

export const userLogin = (formData) => async (dispatch) => {
  try {
    dispatch(loginPending());

    //call api
    const result = await loginUser(formData);
    // console.log(result);
    if (result.data.status === "error") {
      return dispatch(loginFail(result.data.message));
    }
    dispatch(fetchUserProfile());
    dispatch(loginSuccess());
  } catch (error) {
    console.log(error);
    dispatch(loginFail());
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const userProfile = await getUserProfile();
    if (userProfile.user && userProfile.user._id) {
      return dispatch(getUserSuccess(userProfile.user));
    }
    dispatch(getUserFail("User is not found"));
  } catch (error) {
    // console.log(error);
    dispatch(getUserFail());
  }
};
