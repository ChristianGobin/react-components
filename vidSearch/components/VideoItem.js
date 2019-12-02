import React from 'react';
import './videoItem.css';

//prop vid = individual video object from vid list.
function VideoItem({ vid, selectedVid }) {
    return (
        //onClick to track selected vid 
        <div className="item video-item" onClick={()=>{selectedVid(vid)}}>
            <img className="ui image" src={vid.snippet.thumbnails.medium.url} />
            <div className="content">
                <a className="header">
                    {vid.snippet.title}
                </a>
            </div>
        </div>
    )
}
export default VideoItem;
