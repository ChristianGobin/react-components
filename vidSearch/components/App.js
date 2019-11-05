import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YoutubeApi from '../components/YoutubeApi';
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
      <header className="ui header">
          Search Videos.
        </header>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList query={this.state.value} />
      </div >
    )
  }
}

export default App;
