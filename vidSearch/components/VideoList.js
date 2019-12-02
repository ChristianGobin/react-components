import React from 'react';
import VideoItem from './VideoItem';
//deconstruct props component to utilize the videos prop
const VideoList = ({ videos , selectedVid}) => {
    //pass video objects into videoItem using props + map
    //rendered list is a collection of Video Items being rendered
    const renderedList = videos.map(video => {
        return (
            <div className="ui relaxed divided list">
                <VideoItem vid={video} selectedVid = {selectedVid}/>
            </div>
        )
    })
    return (
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList;
