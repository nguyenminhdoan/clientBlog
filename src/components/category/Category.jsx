import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const result = await axios.get("http://localhost:3003/api/category");
      setCats(result.data.data);
    };
    getCats();
  }, []);
  return (
    <StyleSidebar>
      <StyleSidebarItems>
        <StyleSidebarTitle>ABOUT ME</StyleSidebarTitle>
        <img
          src="https://images.unsplash.com/photo-1622645705805-a9cddc5ec2d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="blog sidebar"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo
          dolore doloremque corrupti nesciunt esse neque suscipit? Eius, facilis
          quae, rerum labore aliquam obcaecati vitae, eaque mollitia
          necessitatibus dolore qui!
        </p>
      </StyleSidebarItems>
      <StyleSidebarItems>
        <StyleSidebarTitle>CATEGORIES</StyleSidebarTitle>
        <StyleSidebarList>
          {cats.map((cat) => (
            <Link
              key={cat._id}
              style={{ color: "black" }}
              to={`/?cat=${cat.name}`}
            >
              <li>{cat.name}</li>
            </Link>
          ))}
        </StyleSidebarList>
      </StyleSidebarItems>
      <StyleSidebarItems>
        <StyleSidebarTitle>FOLLOW US</StyleSidebarTitle>
        <StyleSidebarList>
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </StyleSidebarList>
      </StyleSidebarItems>
    </StyleSidebar>
  );
};

const StyleSidebar = styled.div`
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    margin-top: 15px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;
  }
`;

const StyleSidebarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  p {
    padding: 30px;
  }
`;

const StyleSidebarTitle = styled.span`
  margin: 10px;
  padding: 15px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-size: 12px;
  color: #222;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

const StyleSidebarList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
  text-align: center;

  li {
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
    padding: 7px 0;
  }

  i {
    padding: 3px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default Category;
