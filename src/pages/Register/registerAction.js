import {
  registerSuccess,
  registerPending,
  registerFail,
} from "./registerSlice";

import { createNewUser } from "../../api/userAPI";

export const registerNewUser = (formData) => async (dispatch) => {
  try {
    dispatch(registerPending());

    // call API
    const result = await createNewUser(formData);
    console.log(result);
    if (result.data.status === "success") {
      dispatch(registerSuccess(result.data.message));
    } else {
      dispatch(registerFail(result.data.message));
    }
    // console.log(result);
  } catch (error) {
    console.log(error);
    dispatch(registerFail(error.data.message));
  }
};
