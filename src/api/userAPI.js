import axios from "axios";

const userAPI = "http://localhost:3003/api/user/";

export const createNewUser = async (formData) => {
  try {
    const result = await axios.post(`${userAPI}register`, formData);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (formData) => {
  try {
    const result = await axios.post(`${userAPI}login`, formData);
    if (result.data.status === "success") {
      sessionStorage.setItem("accessJWT", result.data.accessJWT);
      localStorage.setItem(
        "blogSite",
        JSON.stringify({ refreshJWT: result.data.refreshJWT })
      );
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const userLogout = async () => {
  try {
    await axios.delete(`${userAPI}logout`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    if (!accessJWT) console.log("token not found");
    const result = await axios.get(userAPI, {
      headers: {
        Authorization: accessJWT,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
