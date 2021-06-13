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
    console.log(result);
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
