import React from 'react';
import './index.css';

export default function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Christian Gobin's Redux Application</h1>
                <p className="lead">This is a simple single page web application that showcases the use of the React-Redux library. Click on a song button for the song details.</p>
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


        </div>
    )
}