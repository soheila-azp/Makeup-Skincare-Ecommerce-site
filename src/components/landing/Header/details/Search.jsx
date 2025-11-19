import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../assets/icons/search.svg";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="beige w-80 h-8 rounded-lg flex items-center px-2"
    >
      <button type="submit">
        <img
          src={searchIcon}
          alt="Search"
          width={24}
          height={24}
          className="bg-pinkish rounded-lg p-1"
        />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="h-full outline-none text-sm ml-2 w-full"
      />
    </form>
  );
};

export default Search;

