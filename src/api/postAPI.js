import axios from "axios";

const postAPI = "http://localhost:3003/api/post";
const updateAPI = "http://localhost:3003/api/update";

export const getAllPosts = async () => {
  try {
    const result = await axios.get(postAPI);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const result = await axios.get(`${postAPI}/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (formData) => {
  try {
    const result = await axios.post(`${postAPI}`, formData, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const upLoadFile = async (formData) => {
  try {
    const result = await axios.post(`${updateAPI}`, formData);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
