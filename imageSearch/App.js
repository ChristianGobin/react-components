import React from "react";
import "./App.css";
import SearchBar from "./searchBar";
const axios = require('axios').default;

class App extends React.Component {
  state = {images : []}
  //callback function to be passed as prop to searchBar child component.
  onValueSubmit = value => {
    //make api request using axios. 
    axios.get('https://api.unsplash.com/search/photos',{
      params:{query: value},
      headers:{Authorization: 'Client-ID 2a80ec61a4997acededfaadf11414dbd642432711c839758518df8f2ea6bb737'}
    })
      //if api request is successful then set state equal to results.
      //then display results in the main div.
      .then(response => {this.setState({images: response.data.results});})
      //handle error if api request fails
      .catch(error => {console.log(error);})
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar apiCall={this.onValueSubmit}></SearchBar>
        <p>Number of Images Found: {this.state.images.length} </p>
      </div>
    );
  }
}

export default App;
