import React from "react";
import "./App.css";
import SearchBar from "./searchBar";

class App extends React.Component {
  //callback function to be passed as prop to searchBar child component.
  onValueSubmit(value){
    console.log(value)
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar apiCall={this.onValueSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
