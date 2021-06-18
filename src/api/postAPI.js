import axios from "axios";

const POST_POST_API = "http://localhost:3003/api/post";
const DELETE_POST_API = "http://localhost:3003/api/";
const UPLOAD_IMG_API = "http://localhost:3003/api/upload";

export const getAllPosts = async () => {
  try {
    const result = await axios.get(POST_POST_API);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const result = await axios.get(`${POST_POST_API}/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (formData) => {
  try {
    const result = await axios.post(`${POST_POST_API}`, formData, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const upLoadFile = async (formData) => {
  try {
    const result = await axios.post(`${UPLOAD_IMG_API}`, formData, {
      headers: { "Content-type": "form-data" },
    });
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePostAPI = async (formData) => {
  try {
    console.log(DELETE_POST_API + formData._id);
    const result = await axios.delete(`${POST_POST_API}/${formData._id}`, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
      data: formData,
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
