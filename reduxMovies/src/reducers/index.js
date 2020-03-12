import { combineReducers } from "redux";

//Static List of Movie Objects.
const mlReducer = () => {
    return (
        [
            {
                title: 'Good Fellas',
                summary: 'A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book "Wiseguy" by Nicholas Pileggi.'
            },
            {
                title: 'The Godfather',
                summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business."
            },
            {
                title: 'Forrest Gump',
                summary: 'Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).'
            },
            {
                title: 'Casino',
                summary: "In early-1970s Las Vegas, low-level mobster Sam 'Ace' Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. Martin Scorsese directs this adaptation of Nicholas Pileggi's book."
            },

        ]
    )
}
//pickMovie Reducer
const selectedMovieReducer = (movie = null, action) => {
    if (action.type === 'MOVIE_SELECTED') {
        return action.payload
    }
    return movie
}

export default combineReducers({ movieList: mlReducer, selectedMovie: selectedMovieReducer })
