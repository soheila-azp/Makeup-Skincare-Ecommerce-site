import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Searching = ({ onSearchClick, onSearchComplete }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      onSearchComplete(); 
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="beige w-full sm:w-72 md:w-80 h-10 sm:h-8 rounded-lg flex items-center px-2"
    >
      <button
        type="button"
        onClick={() => {
          onSearchClick(); 
        }}
        className="p-2 sm:p-1"
      >
        <Search alt="Search" className="pinkish w-5 h-5" />
      </button>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="h-full outline-none text-sm sm:text-base ml-2 w-full rounded-md"
      />
    </form>
  );
};

export default Searching;



