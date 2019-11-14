import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YoutubeApi from '../components/YoutubeApi';
import '../App.css';

class App extends React.Component {
  state = {videos: []};
  onFormSubmit = async (value) => {
    //Make get request using API Here
    const response = await YoutubeApi.get('/search', {
      params:{ q: value }
    })
    this.setState({videos: response.data.items})
  }
  render() {
    return (
      <div className="vidApp ui container">
      <h2 style={{textAlign: 'center', color:'#EE82EE'}}>
        React Video Search by Christian Gobin
      </h2>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoList videos={this.state.videos}/>
      </div >
    )
  }
}

export default App;
