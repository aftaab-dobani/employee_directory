import React, { Component } from "react";

// Data to pull:
// Thumbnail
// Name 
// Phone
// Email

function EmployeeTable(props) {

  return (
      <table className="table table-bordered">
      <thead>
      <tr>
        <th scope="col">Thumbnail</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>

      </tr>

      {props.employees.map((employee, index) => (
          <tr key = {index}data-index={index}>
              <td>{employee.picture.medium}</td> 
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
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
