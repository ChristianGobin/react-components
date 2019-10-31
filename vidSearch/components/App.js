import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import '../App.css';

class App extends React.Component {
  onFormSubmit = (value) => {
    //make request to api using value
    this.setState = ({
      query: value
    })
  }
  render() {
    return (
      <div className="vidApp">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList query={this.state.value} />
        <p style={{ textAlign: 'center' }}>
          There is a video here.
        </p>
      </div >
    )
  }
}

export default App;
