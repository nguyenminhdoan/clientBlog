import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { loginUser } from "../../api/userAPI";

export const userLogin = (formData) => async (dispatch) => {
  try {
    dispatch(loginPending());

    //call api
    const result = await loginUser(formData);
    console.log(result);
    if (result.data.status === "error") {
      return dispatch(loginFail(result.message));
    }
    dispatch(loginSuccess());
  } catch (error) {
    console.log(error);
    dispatch(loginFail());
  }
};
