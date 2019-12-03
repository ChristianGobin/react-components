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
    //url of video 
    const vidSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe src={vidSrc} />
            </div>
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
