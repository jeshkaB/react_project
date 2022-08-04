import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movie: [],
    errors: null
}

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.errors = null
                state.movie = action.payload
            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.errors = action.payload
            })
})

const {reducer: movieReducer} = movieSlice;
const movieActions = {getMovieById};

export {movieReducer, movieActions}