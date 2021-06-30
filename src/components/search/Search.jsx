import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { searchPostAction } from "../../pages/posts/postAction";

const Search = () => {
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { value } = e.target;
    dispatch(searchPostAction(value));
  };
  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="text"
        name="search"
        placeholder="Type to Search"
        onChange={handleOnchange}
      />
      <div className="search-btn" href="#">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Search;
