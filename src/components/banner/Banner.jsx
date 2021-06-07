import React from "react";
import styled from "styled-components";
const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <BannerTitle>
          <BannerTitleSm>React & Node</BannerTitleSm>
          <BannerTitleLg>Blog</BannerTitleLg>
        </BannerTitle>
        <BannerImg
          className="banner-img"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="banner blog"
        />
      </BannerStyle>
    </div>
  );
};

const BannerStyle = styled.div`
  margin-top: 20px;
`;

const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #444;
`;

const BannerTitleSm = styled.span`
  position: relative;
  font-size: 20px;
  margin-top: 10px;
`;

const BannerTitleLg = styled.span`
  position: absolute;
  top: 24%;
  font-size: 100px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export default Banner;
