import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { searchPostAction } from "../../pages/posts/postAction";
import { useRef } from "react";

const Search = (props) => {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  // const dispatch = useDispatch();

  const handleSearchTermChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (!onSubmit) return;

    // Clear time out
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      onSubmit({
        searchTerm: value,
      });
    }, 300);

    // dispatch(searchPostAction(value));
  };
  return (
    <div className="search-box">
      <input
        className="search-txt"
        type="text"
        name="search"
        placeholder="Type to Search"
        onChange={handleSearchTermChange}
      />
      <div className="search-btn" href="#">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Search;
