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

      </thead>
      <tbody results={props.results} />
      </table>
  );
}

// const Employee = ({ employee }) => {
//     return (
//         <tr>
//             <th scope="row">
//                 <img
//                 src={employee.picture.small}
//             </th>
//         </tr>
//     )
// }
export default EmployeeTable;
