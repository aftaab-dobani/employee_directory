import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
// Data to pull:
// Thumbnail
// Name
// Phone
// Email
export default class Data extends Component {
   state = {
       employee: [],
       filteredEmployee: [],
   }

   componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employee: results.data.results,
        filteredEmployee: results.data.results
      }, () => {console.log(this.state)});
    });

    
  }

  render(){
      return(
          <EmployeeTable employee= {this.state.employee}/>
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