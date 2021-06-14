import {
  fetchPostFail,
  fetchPostSuccess,
  fetchPostLoading,
  fetchSinglePostLoading,
  fetchSinglePostSuccess,
  fetchSinglePostFail,
} from "./postsSlice";
import { getAllPosts, getSinglePost, createPost } from "../../api/postAPI";

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
  } catch (error) {}
};
