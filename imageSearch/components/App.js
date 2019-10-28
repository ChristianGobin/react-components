import React from "react";
import "./App.css";
import SearchBar from "./searchBar";
import unsplash from "./api/unsplash";
import ImageList from "./imageList";

class App extends React.Component {
  state = {images : []}
  //callback function to be passed as prop to searchBar child component.
  onValueSubmit = async value => {
    //make api request using unsplash.js -> axios.create. 
    let res = await unsplash.get('/search/photos',{params:{query: value}})
      //if api request is successful then set state equal to results.
      //then display results in the main div.
      this.setState({images: res.data.results});
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
