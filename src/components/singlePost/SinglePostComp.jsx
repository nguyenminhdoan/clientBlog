import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  fetchSinglePost,
  deletePost,
  updatePost,
} from "../../pages/posts/postAction";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const SinglePostComp = () => {
  const initialState = {
    title: "",
    desc: "",
  };
  const [formUpdate, setFormUpdate] = useState(initialState);
  const [updateMode, setUpdateMode] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const { posts } = useSelector((state) => state.posts);
  const { isAuth, user } = useSelector((state) => state.userLogin);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id, dispatch]);

  const handleDelete = () => {
    const cf = window.confirm(
      `Are you sure to delete this "${posts.title}" post`
    );
    if (cf) {
      const formData = { _id: id, clientId: posts.clientId };

      dispatch(deletePost(formData));
      window.location.replace("/");
    }
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormUpdate({ ...formUpdate, [name]: value });
  };

  const handleUpdate = () => {
    const formData = { ...formUpdate, _id: id };
    dispatch(updatePost(formData));
  };

  return (
    <div>
      {updateMode ? (
        <StyleInput
          onChange={handleOnchange}
          placeholder="please type title here"
          name="title"
        />
      ) : (
        <StylePostTitle>{posts.title}</StylePostTitle>
      )}

      <StylePostEdit>
        {isAuth && posts.clientId === user._id ? (
          <>
            {" "}
            <i className="fas fa-edit" onClick={() => setUpdateMode(true)}></i>
            <i onClick={handleDelete} className="fas fa-trash"></i>
          </>
        ) : (
          ""
        )}
      </StylePostEdit>

      <StyleInfo>
        <span className="post-info_author">
          Author: <b>{posts.username}</b>
        </span>
        <span className="post-info_date">
          {new Date(posts.createdAt).toDateString()}
        </span>
      </StyleInfo>

      {updateMode ? (
        <StyleInput
          onChange={handleOnchange}
          placeholder="please type description here"
          name="desc"
        />
      ) : (
        <StyleContentPost>{posts.desc}</StyleContentPost>
      )}
      {updateMode && (
        <StyleBntUpdate onClick={handleUpdate}>Update</StyleBntUpdate>
      )}
    </div>
  );
};

const StylePostTitle = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: "Lora", serif;
  font-size: 28px;
`;

const StylePostEdit = styled.div`
  display: flex;
  justify-content: flex-end;

  i {
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
  }
`;

const StyleInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
  font-family: "Varela Round", sans-serif;
  color: #b39656;
`;

const StyleContentPost = styled.p`
  color: #666;
  font-size: 18px;
  line-height: 25px;

  ::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const StyleInput = styled.textarea`
  border: none;
  width: 100%;
  color: #666;
  font-size: 18px;
  line-height: 25px;

  :focus {
    outline: none;
  }
`;

const StyleBntUpdate = styled.button`
  width: 100px;
  border: none;
  background-color: teal;
  padding: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 200px;
  margin-left: 200px;
  text-align: center;
`;
export default SinglePostComp;
