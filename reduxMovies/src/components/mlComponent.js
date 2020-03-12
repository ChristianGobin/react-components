import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';
class MlComponent extends React.Component {

    //Provide Movie Array to the component using map function.
    //return each movie title in its own button. 
    mlRender() {
        return (
            this.props.movies.map(movie => {
                return (
                    <button type="button" className="list-group-item list-group-item-action" onClick={() => { this.props.selectMovie(movie) }}>
                        {movie.title}
                    </button>
                )
            })
        )
    }

    render() {
        return (
            <div>
                {this.mlRender()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { movies: state.movieList }
}

//select movie action creater added to state.
export default connect(mapStateToProps, { selectMovie })(MlComponent);