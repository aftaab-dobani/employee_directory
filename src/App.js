import React from "react";
import Header from "./components/Header/Header"
import Searchbar from "./components/Searchbar/Searchbar"
import Data from "./components/Data/Data"
import "./App.css";

function App() {
  return (
    <div className="App">
    
        <Header />
        <Searchbar />
        <Data />
      
     
    </div>
  );
}

export default App;
