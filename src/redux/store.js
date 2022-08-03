import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer, themeReducer} from "./slices";


const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    theme: themeReducer
})

const setupStore = ()=>configureStore({
    reducer:rootReducer
})


export {setupStore}