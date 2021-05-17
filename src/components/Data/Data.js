import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import Searchbar from "../Searchbar/Searchbar"
// Data to pull:
// Thumbnail
// Name
// Phone
// Email
export default class Data extends Component {
   state = {
       employees: [],
       filteredEmployees: [],
       employee: "",
      }

   

   componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      }, () => {console.log(this.state)});
    });

    
  }

  handleInputChange = (event) => {
    this.setState({employee: event.target.value});
  }

  render(){
      return(
        <>
          <Searchbar handleInputChange = {this.handleInputChange}></Searchbar>
          <EmployeeTable employees= {this.state.employees.filter(value => value.name.first.includes(this.state.employee) )}/>
        </>
      )
  }
};
// headings = [
//     { name: "Image", width: "10%" },
//     { name: "Name", width: "10%" },
//     { name: "Phone", width: "10%" },
//     { name: "Email", width: "10%" },
//   ];
 
// export default Data; 