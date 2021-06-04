import React from "react";
import styled from "styled-components";

const SinglePostComp = () => {
  return (
    <div>
      <StylePostTitle>
        Lorem ipsum dolor sit amet.
        <StylePostEdit>
          <i class="fas fa-edit"></i>
          <i class="fas fa-trash"></i>
        </StylePostEdit>
      </StylePostTitle>
      <StyleInfo>
        <span className="post-info_author">
          Author: <b>NMD</b>
        </span>
        <span className="post-info_date">1 hour ago</span>
      </StyleInfo>
      <StyleContentPost>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci
        quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
        adipisci quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
        adipisci quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
        adipisci quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
        adipisci quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
        adipisci quae vitae quidem ipsum eos beatae deserunt, modi ducimus earum
        architecto id eum aperiam incidunt odit corrupti nam assumenda
        molestiae!
      </StyleContentPost>
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
