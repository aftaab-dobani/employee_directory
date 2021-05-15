import React from "react";

function Searchbar() {
  return (
    <div className="searchbar">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default Searchbar;
