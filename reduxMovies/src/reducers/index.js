//Static List of Movie Objects.

const movieList = [
    {
        title: 'Good Fellas',
        summary: ''
    },
    {
        title: 'The Godfather',
        summary: ''
    },
    {
        title: 'Forrest Gump',
        summary: ''
    },
    {
        title: 'Casino',
        summary: ''
    },

]

const moviePick = (movie = null, action) => {
    if (action.type === 'SELECT_MOVIE') {
        return movie
    } else {
        return null
    }
}