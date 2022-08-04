import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesByGenreService} from "../../services";

const initialState = {
    moviesByGenre: [],
    errors: null
}

const getAllByGenre = createAsyncThunk(
    'moviesByGenre/getAllByGenre',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesByGenreService.getAll(id);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const moviesByGenreSlice = createSlice({
    name: 'moviesByGenreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllByGenre.fulfilled, (state, action) => {
                state.errors = null
                state.moviesByGenre = action.payload
            })
            .addCase(getAllByGenre.rejected, (state, action) => {
                state.errors = action.payload
            })
})

const {reducer: moviesByGenreReducer} = moviesByGenreSlice;
const moviesByGenreActions = {getAllByGenre};

export {moviesByGenreReducer, moviesByGenreActions}