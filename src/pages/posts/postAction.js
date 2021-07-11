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
  createPostLoading,
  createPostSuccess,
  createPostFail,
  // paginateLoading,
  // paginateFail,
  // paginateSuccess,
  searchPostLoading,
  searchPostSuccess,
  searchPostFail,
} from "./postsSlice";
import {
  getAllPosts,
  getSinglePost,
  createPost,
  upLoadFile,
  deletePostAPI,
  updatePostAPI,
  // paginate,
  searchPosts,
} from "../../api/postAPI";
import { notification } from "antd";
const openNotificationWithIcon = (type, msg) => {
  notification[type]({
    message: msg,
  });
};
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
    dispatch(createPostLoading());
    const result = await createPost(formData);
    if (result.data.status === "success") {
      dispatch(createPostSuccess(result.data.message));
      openNotificationWithIcon("success", result.data.message);
      window.location.replace("/");
    } else {
      dispatch(createPostFail(result.data.message));
      openNotificationWithIcon("error", result.data.message);
    }

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
    if (result && result.data.status === "success") {
      dispatch(deletePostSuccess(result.data.message));
    }
    dispatch(deletePostFail(result.data.message));
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (formData) => async (dispatch) => {
  try {
    const result = await updatePostAPI(formData);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchPostAction = (page, title) => async (dispatch) => {
  try {
    dispatch(searchPostLoading());
    const result = await searchPosts(page,title);
    if (result.data.status === "success") {
      dispatch(searchPostSuccess(result.data));
    } else {
      dispatch(searchPostFail(result.data.message));
    }
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

// export const paginateAction = (page) => async (dispatch) => {
//   try {
//     dispatch(paginateLoading());
//     const result = await paginate(page);
//     // console.log(result);
//     if (result) {
//       dispatch(paginateSuccess(result.data));
//     }
//     dispatch(paginateFail());
//   } catch (error) {
//     console.log(error);
//   }
// };
