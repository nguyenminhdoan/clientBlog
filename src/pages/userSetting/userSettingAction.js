import {
  fetchUpdateFail,
  fetchUpdateLoading,
  fetchUpdateSuccess,
} from "./userSettingSlice";

import { updateUserProfile } from "../../api/userAPI";

export const updateProfile = (id, formData) => async (dispatch) => {
  dispatch(fetchUpdateLoading());
  try {
    const result = await updateUserProfile(id, formData);
    console.log(result);
    if (result.data.status === "error") {
      dispatch(fetchUpdateFail(result.data.message));
    } else {
      dispatch(fetchUpdateSuccess(result.data.message));
    }
  } catch (error) {
    console.log(error.message);
  }
};
