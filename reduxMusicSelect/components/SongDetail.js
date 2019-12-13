import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (props.selectedSong == null) {
        return <div>Select a Song</div>
    }
    return (
        <div className='ui card'>
            <h4>
                Selected Song:
            </h4>
            Title: {props.selectedSong.title} <br />
            Duration: {props.selectedSong.duration}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSongReducer }
}

export default connect(mapStateToProps)(SongDetail)