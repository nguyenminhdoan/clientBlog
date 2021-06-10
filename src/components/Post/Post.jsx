import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { post } = props;
  return (
    <Link to={`/post/${post._id}`}>
      <div>
        <Card
          hoverable
          cover={
            <img
              style={({ height: "70vh" }, { borderRadius: "4px 4px 0 0 " })}
              alt="Modern Design"
              src={
                post.photo ||
                `https://images.unsplash.com/photo-1622746606812-c4571647a30a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80`
              }
            />
          }
        >
          <StylePostInfo>
            <StylePostCat>
              {post.categories.map((cat, i) => (
                <span key={i}>{cat}</span>
              ))}
            </StylePostCat>
            <StylePostTitle>{post.title}</StylePostTitle>

            <hr />
            <StylePostDate>
              {new Date(post.createdAt).toDateString()}
            </StylePostDate>
            <StylePostDesc>{post.desc}</StylePostDesc>
          </StylePostInfo>
        </Card>
      </div>
    </Link>
  );
};

const StylePostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StylePostCat = styled.div`
  span {
    font-family: "Varela Round", sans-serif;
    font-size: 11px;
    color: #be9656;
    line-height: 20px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const StylePostTitle = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
`;

const StylePostDate = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  color: #999;
  margin-top: 15px;
`;

const StylePostDesc = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 14px;
  color: #444;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
export default Post;
