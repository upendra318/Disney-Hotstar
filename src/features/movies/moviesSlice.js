import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const initialState= {
    newdisney: null,
    recommended: null,
    originals: null,
    tranding: null,
}

const moviesSlice= createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.newdisney= action.payload.newdisney;
            state.recommended= action.payload.recommended;
            state.originals= action.payload.originals;
            state.tranding= action.payload.tranding;
        },
    },
})

export const {setMovies} = moviesSlice.actions;

export const selectNewdisney= state => state.movie.newdisney;
export const selectRecommened= state => state.movie.recommended;
export const selectOriginals= state => state.movie.originals;
export const selectTranding= state => state.movie.tranding;

export default moviesSlice.reducer;