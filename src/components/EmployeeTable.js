import React, { Component } from "react";

// Data to pull:
// Thumbnail
// Name 
// Phone
// Email

function EmployeeTable(props) {

  return (
      <table className="table">
      <thead>
      <tr>
        <th scope="col">Thumbnail</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>

      </tr>

      {Employee.map((Employee)) => (
          <tr data-index={index}>
              <td>{Employee.picture}</td>
              <td>{Employee.name}</td>
              <td>{Employee.phone}</td>
              <td>{Employee.email}</td>
          </tr>
     
      ))}
      
      </thead>
      <tbody results={props.results} />
      </table>
    
  );
}


// const Employee = ({ employee }) => {
//     return (
//         <div>
//             {name.map(name => <h2>{name}</h2>)}
//         </div>
//     )
//     }

export default EmployeeTable;
