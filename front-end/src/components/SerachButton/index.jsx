import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchButton({ hide, onClick }) {
  if (hide) return null;
  return (
    <button onClick={onClick} className="btn-add btn btn-info">
      <SearchIcon></SearchIcon>
    </button>
  );
}

export default SearchButton;
