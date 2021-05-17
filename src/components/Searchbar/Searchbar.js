import React from "react";


function Searchbar(props) {
  return (
    <div className="searchbar">
      <form className="form-inline">
        <input
          value={props.employee}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employee"
        />
      </form>
    </div>
  );
}

export default Searchbar;
