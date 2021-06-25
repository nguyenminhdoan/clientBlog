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
  } catch (error) {
    console.log(error.message);
  }
};
