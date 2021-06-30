import axios from "axios";

const POST_BLOG_API = "http://localhost:3003/api/post";
const UPLOAD_IMG_API = "http://localhost:3003/api/upload";

export const getAllPosts = async () => {
  try {
    const result = await axios.get(POST_BLOG_API);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = async (id) => {
  try {
    const result = await axios.get(`${POST_BLOG_API}/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (formData) => {
  try {
    const result = await axios.post(`${POST_BLOG_API}`, formData, {
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
    const result = await axios.delete(`${POST_BLOG_API}/${formData._id}`, {
      data: formData,
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostAPI = async (formData) => {
  try {
    const result = await axios.put(
      `${POST_BLOG_API}/${formData._id}`,
      formData,
      {
        headers: { Authorization: sessionStorage.getItem("accessJWT") },
      }
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const paginate = async (page) => {
  try {
    const result = await axios.get(
      `${POST_BLOG_API}/page?page=${page}&equal=4`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
