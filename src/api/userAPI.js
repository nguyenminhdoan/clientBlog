import axios from "axios";

const USER_API = "http://localhost:3003/api/user/";
const TOKEN_API = "http://localhost:3003/api/token";

export const createNewUser = async (formData) => {
  try {
    const result = await axios.post(`${USER_API}register`, formData);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (formData) => {
  try {
    const result = await axios.post(`${USER_API}login`, formData);
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
    await axios.delete(`${USER_API}logout`, {
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
    const result = await axios.get(USER_API, {
      headers: {
        Authorization: accessJWT,
      },
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewJWT = async () => {
  try {
    const { refreshJWT } = JSON.parse(localStorage.getItem("blogSite"));
    if (!refreshJWT) {
      Promise.reject("token not found");
    }
    const result = await axios.get(TOKEN_API, {
      headers: {
        Authorization: refreshJWT,
      },
    });
    if (result.data.status === "success") {
      sessionStorage.setItem("accessJWT", result.data.accessJWT);
    }
    Promise.resolve(true);
  } catch (error) {
    console.log(error.message);
  }
};
