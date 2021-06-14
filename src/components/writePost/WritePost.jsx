import React, { useState } from "react";
import "./write.css";
import { createNewPost } from "../../pages/posts/postAction";
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
    e.preventDefault();
    dispatch(fetchUserProfile());

    const newFormPost = { ...formPost, username: user.username };

    dispatch(createNewPost(newFormPost));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormPost({ ...formPost, [name]: value });
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
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
