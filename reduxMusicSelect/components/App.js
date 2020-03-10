import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import './App.css';

const App = () => {
  let style = {
     padding: '5px',
     margin: '20px'
  }
  return (
    <div className="ui container grid" style={style}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>)
}
export default App;
