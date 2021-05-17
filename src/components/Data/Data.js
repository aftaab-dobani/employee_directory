import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
// Data to pull:
// Thumbnail
// Name
// Phone
// Email
export default class Data extends Component {
   state = {
       employees: [],
       filteredEmployees: [],
   }

   

   componentDidMount() {
    API.getEmployees().then(results => {
      this.setState({
        employees: results.data.results,
        filteredEmployees: results.data.results
      }, () => {console.log(this.state)});
    });

    
  }

  render(){
      return(
          <EmployeeTable employees= {this.state.employees}/>
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