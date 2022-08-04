import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const initialState = {
    movies: [],
    errors: null,
    next: null,
    prev: null
}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.movies = action.payload
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
})

const {reducer: moviesReducer} = moviesSlice;
const moviesActions = {getAll};

export {moviesReducer, moviesActions}