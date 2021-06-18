import React, { useState } from "react";
import "./write.css";
import { createNewPost, importImg } from "../../pages/posts/postAction";
import { fetchUserProfile } from "../../pages/login/loginAction";
import { useDispatch, useSelector } from "react-redux";

const WritePost = () => {
  const initialState = {
    title: "",
    desc: "",
    file: null,
  };
  const [formPost, setFormPost] = useState(initialState);

  const { user } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    let newFormPost;
    e.preventDefault();

    dispatch(fetchUserProfile());

    if (formPost.file) {
      const formData = new FormData();
      formData.append("name", formPost.file.file.name);
      formData.append("file", formPost.file.file);
      newFormPost = {
        ...formPost,
        photo: formPost.file.file.name,
        username: user.username,
      };

      dispatch(createNewPost(newFormPost));
      dispatch(importImg(formData));
    }

    newFormPost = { ...formPost, username: user.username };

    dispatch(createNewPost(newFormPost));
  };

  const handleUploadImg = (e) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);

      setFormPost({
        ...formPost,
        file: { ...files[0], file: files[0], url },
      });
      // console.log(formPost);
    }
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormPost({ ...formPost, [name]: value });
    // console.log(formPost);
  };

  return (
    <div className="write">
      {formPost.file && formPost.file.url && (
        <img className="writeImg" src={formPost.file.url} alt="" />
      )}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            name="file"
            onChange={handleUploadImg}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="title"
            onChange={handleOnchange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name="desc"
            onChange={handleOnchange}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default WritePost;
