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
  let newFormPost;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserProfile());

    if (formPost.file) {
      const data = new FormData();
      const filename = Date.now().toString() + formPost.file;
      data.append("name", filename);
      data.append("file", formPost.file);
      newFormPost = { ...formPost, username: user.username, photo: filename };
      // goi api
      console.log(newFormPost);
      importImg(newFormPost);
    }

    newFormPost = { ...formPost, username: user.username };

    dispatch(createNewPost(newFormPost));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormPost({ ...formPost, [name]: value });
  };

  return (
    <div className="write">
      {formPost.file && <img className="writeImg" src="" alt="" />}

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
            onChange={handleOnchange}
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
