import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";

// Data to pull:
// Thumbnail
// Name 
// Phone
// Email

class default class Body extends Component {
    state = {
        employee: [],
        filteredEmployee: [],
    }
}; 

// headings = [
//     { name: "Image", width: "10%" },
//     { name: "Name", width: "10%" },
//     { name: "Phone", width: "10%" },
//     { name: "Email", width: "10%" },
//   ];

  componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employee: results.data.results,
        filteredEmployee: results.data.results
      });
    });
  }

 
