import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer, moviesByGenreReducer, moviesReducer, themeReducer} from "./slices";


const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    theme: themeReducer,
    movie: movieReducer,
    moviesByGenre:moviesByGenreReducer
})

const setupStore = ()=>configureStore({
    reducer:rootReducer
})


export {setupStore}