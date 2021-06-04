import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

const Post = () => {
  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            style={({ width: "100%" }, { height: "350px" })}
            alt="Modern Design"
            src="https://images.unsplash.com/photo-1622746606812-c4571647a30a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
          />
        }
      >
        <StylePostInfo>
          <StylePostCat>
            <span className="post-cat">Music</span>
            <span className="post-cat">Life</span>
          </StylePostCat>
          <StylePostTitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
            reprehenderit.
          </StylePostTitle>
          <hr />
          <StylePostDate>1 hour ago</StylePostDate>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aspernatur repellat animi illo ad atque rem, placeat enim saepe
            labore voluptate sequi, ullam accusantium consectetur! Atque modi
            fuga quo praesentium?
          </p>
        </StylePostInfo>
      </Card>
    </div>
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
