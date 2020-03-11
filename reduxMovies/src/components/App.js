import React from 'react';
import movieList from '../reducers/index'
import './index.css';

export default function App() {
    const style = {
        'text-align': 'center'
    }
    const movies = movieList.map((movie) =>
        <button type='button' className='list-group-item' onClick={e => console.log('You Selected ' + movie.title)}>
            {movie.title}
        </button>
    )
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Christian Gobin's Redux Application</h1>
                <p className="lead">This is a simple single page web application that showcases the use of the React-Redux library. Click on a Movie to Reveal it's Summary.</p>
                <hr className="my-4" />
                <p>The App uses utility Redux for State Management rather than Class Based React Components.</p>
                <a
                    className="btn btn-primary btn-sm"
                    href="https://github.com/ChristianGobin/react-redux"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My Github
                </a>
            </div>
            <h5
                className='list-group-item-heading'
                style={style}
            >
                Select a Movie
            </h5>
            <ul className='list-group'>
                {movies}
            </ul>
        </div>
    )
}
