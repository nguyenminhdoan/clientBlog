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
    <div class="search-box">
      <input
        class="search-txt"
        type="text"
        name="search"
        placeholder="Type to Search"
        onChange={handleOnchange}
      />
      <div class="search-btn" href="#">
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Search;
