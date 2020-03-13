import React from 'react';
import { connect } from 'react-redux';
const MovieCard = (props) => {
    if (props.currentMovie == null) {
        return <div>Choose a Movie</div>
    }
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>
                    {props.currentMovie.title}
                </h5>
                <p className='card-text'>
                    {props.currentMovie.summary}
                </p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { currentMovie: state.selectedMovie }
}
export default connect(mapStateToProps)(MovieCard)
