import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";

// Data to pull:
// Thumbnail
// Name 
// Phone
// Email

class EmployeeData extends Component {
    state = {
        employee: [],
        search: "",
        filteredEmployee: []
    }
}; 

headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "10%" },
    { name: "Email", width: "10%" },
  ];

  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }
