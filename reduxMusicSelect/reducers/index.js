import { combineReducers } from 'redux';

// create both reducers, export them
//1. Static list of songs

const songListReducer = () => {
    return [
        { title: 'No Scrubs', duration: '2:32' },
        { title: 'I want it that way', duration: '3:44' },
        { title: 'I feel is coming', duration: '5:32' },
        { title: 'Thursday', duration: '3:00' }
    ]
}

//2. Selected Song Reducer
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }
    return selectedSong;
}

//set keys of combine reducers to each reducer.
export default combineReducers({ songListReducer: songListReducer, selectedSongReducer: selectedSongReducer });