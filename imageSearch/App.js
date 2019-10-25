import React from "react";
import "./App.css";
import SearchBar from "./searchBar";
import unsplash from "./api/unsplash";
import ImageList from "./imageList";

class App extends React.Component {
  state = {images : []}
  //callback function to be passed as prop to searchBar child component.
  onValueSubmit = value => {
    //make api request using unsplash.js -> axios.create. 
    unsplash.get('/search/photos',{params:{query: value}})
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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
