

export const create_action = (movie) => {
    return (
        {
            type: 'SELECT_MOVIE',
            payload: movie
        }
    )
}