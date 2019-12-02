import React from 'react';

//component shows video title and desciption + video player
const VideoDetail = ({ vid }) => {
    //conditional rendering... if no video is set.
    if (!vid) {
        return (
            <div>
                ...Loading.
            </div>
        )
    }
    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{vid.snippet.title}</h4>
                <p className="ui description">
                    {vid.snippet.description}
                </p>
            </div>
        </div>
    );
}

export default VideoDetail;