import React from 'react';

//component shows video title and desciption + video player
const VideoDetail = ({ video }) => {
    //conditional rendering... if no video is set.
    if (!video) {
        return (
            <div>
                ...Loading.
            </div>
        )
    }
    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="ui description">
                    {video.snippet.description}
                </p>
            </div>
        </div>
    );
}

export default VideoDetail;
