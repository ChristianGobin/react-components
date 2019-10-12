import React from "react";
import "./App.css";
import SearchBar from "./searchBar";
const axios = require('axios').default;

class App extends React.Component {
  //callback function to be passed as prop to searchBar child component.
  onValueSubmit(value){
    //make api request using axios. 
    axios.get('https://api.unsplash.com/search/photos',{
      params:{query: value},
      header:{Authorization: 'Client-ID 2a80ec61a4997acededfaadf11414dbd642432711c839758518df8f2ea6bb737'}
    })
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
