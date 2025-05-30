import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: [
        {
        id:1,
        title: "Movie 1"
         },
        {
        id:2,
        title: "Movie 2"
        }
]
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: state.movies[state.movies.length - 1] + 1,
                title: action.payload
            }
            state.movies.push(newMovie);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter((movie) => movie.id !== action.payload)
        },
    }
})

export const {addMovie, removeMovie} = movieSlice.actions;
export default movieSlice.reducer;