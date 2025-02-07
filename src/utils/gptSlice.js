import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        movieNames: null,
        moviesResults: null

    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResult: (state, action)=> {
            const {movieNames, moviesResults} = action.payload;
            state.movieNames = movieNames;
            state.moviesResults = moviesResults;
        }
    }
})

export const {toggleGptSearchView, addGptMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;