import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnimate, fade, photoAnimate } from "../../animation";

const SectionContact = () => {
  return (
    <StyledAbout>
      <StyleDescription>
        <motion.div className="title" div>
          <StyleHide>
            <motion.h2 variants={titleAnimate}>Let you ideas go into</motion.h2>
          </StyleHide>

          <StyleHide>
            <motion.h2 variants={titleAnimate}>
              your <span>Blogs</span>
            </motion.h2>
          </StyleHide>

          <StyleHide>
            <motion.h2 variants={titleAnimate}>
              and express it to readers
            </motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and video ideas that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyleDescription>

      <StyleImage>
        <motion.img
          variants={photoAnimate}
          src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="a man with camera"
        />
      </StyleImage>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;
  font-family: "Poppins", sans-serif;

  button {
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #333;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #23d997;
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

const StyleDescription = styled.div`
  flex: 1;
  padding-right: 6rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 5rem;
    }
  }
`;

const StyleImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;

  h2 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  h3 {
    color: #fff;
  }
  h4 {
    font-weight: lighter;
    font-size: 1.5rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
    font-size: 2.5rem;
  }
  p {
    padding: 4rem 0rem;
    font-size: 1.5rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default SectionContact;
