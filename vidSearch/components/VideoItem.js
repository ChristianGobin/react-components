import React from 'react';
import './videoItem.css';

//prop vid = individual video object from vid list.
function VideoItem({ vid }) {
    return (
        <div className="item video-item">
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
