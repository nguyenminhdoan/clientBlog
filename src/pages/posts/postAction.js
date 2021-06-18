import {
  fetchPostFail,
  fetchPostSuccess,
  fetchPostLoading,
  fetchSinglePostLoading,
  fetchSinglePostSuccess,
  fetchSinglePostFail,
  deletePostFail,
  deletePostLoading,
  deletePostSuccess,
} from "./postsSlice";
import {
  getAllPosts,
  getSinglePost,
  createPost,
  upLoadFile,
  deletePostAPI,
} from "../../api/postAPI";

export const fetchAllPosts = () => async (dispatch) => {
  dispatch(fetchPostLoading());
  try {
    // fetch data from API
    const result = await getAllPosts();
    result.data.result.length && dispatch(fetchPostSuccess(result.data.result));
  } catch (error) {
    console.log(error);
    dispatch(fetchPostFail(error.message));
  }
};

export const fetchSinglePost = (id) => async (dispatch) => {
  dispatch(fetchSinglePostLoading());
  try {
    const result = await getSinglePost(id);
    // console.log(result.data.data);
    dispatch(fetchSinglePostSuccess(result.data.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchSinglePostFail(error.message));
  }
};

export const createNewPost = (formData) => async (dispatch) => {
  try {
    const result = await createPost(formData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const importImg = (formData) => async (dispatch) => {
  try {
    await upLoadFile(formData);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (formData) => async (dispatch) => {
  try {
    dispatch(deletePostLoading());
    const result = await deletePostAPI(formData);
    console.log(result);
    if (result.data.status === "success") {
      dispatch(deletePostSuccess(result.data.message));
    }
    dispatch(deletePostFail(result.data.message));
  } catch (error) {
    console.log(error.message);
  }
};
