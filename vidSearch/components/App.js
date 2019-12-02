import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YoutubeApi from '../api/YoutubeApi';
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
  //Function tracks what vid is selected. 
  selectedVid = (vid) {
    console.log(vid.snippet.title + ' is the selected video.');
    this.setState({selectedVid: vid});
  }
  render() {
    return (
      <div className="vidApp ui container">
      <h2 style={{textAlign: 'center', color:'#EE82EE'}}>
        React Video Search by Christian Gobin
      </h2>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoDetail video={this.state.selectedVid} />
        <VideoList videos={this.state.videos} selectedVid = {this.selectedVid}/>
      </div >
    )
  }
}

export default App;
