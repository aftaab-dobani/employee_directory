import React, { Component } from 'react';

function EmployeeTable(props) {
    return (
      <table className="table">
        <thead>
          <tr>
            name="breed"
            list="breeds"
            type="text"
            className="form-control"
            placeholder="Type in a dog breed to begin"
            id="breed"
          />
          <datalist id="breeds">
            {props.breeds.map(breed => (
              <option value={breed} key={breed} />
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;