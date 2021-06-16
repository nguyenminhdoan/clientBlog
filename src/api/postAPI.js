import axios from "axios";

const POST_IMG_API = "http://localhost:3003/api/post";
const UPLOAD_IMG_API = "http://localhost:3003/api/upload";

export const getAllPosts = async () => {
  try {
    const result = await axios.get(POST_IMG_API);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const result = await axios.get(`${POST_IMG_API}/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (formData) => {
  try {
    const result = await axios.post(`${POST_IMG_API}`, formData, {
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
