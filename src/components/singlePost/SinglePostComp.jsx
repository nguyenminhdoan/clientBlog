import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../pages/posts/postAction";
import { useDispatch, useSelector } from "react-redux";

const SinglePostComp = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  let { id } = useParams();
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id, dispatch]);

  return (
    <div>
      <StylePostTitle>
        {posts.title}
        <StylePostEdit>
          <i className="fas fa-edit"></i>
          <i className="fas fa-trash"></i>
        </StylePostEdit>
      </StylePostTitle>
      <StyleInfo>
        <span className="post-info_author">
          Author: <b>{posts.username}</b>
        </span>
        <span className="post-info_date">
          {new Date(posts.createdAt).toDateString()}
        </span>
      </StyleInfo>
      <StyleContentPost>{posts.desc}</StyleContentPost>
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

export default SinglePostComp;
