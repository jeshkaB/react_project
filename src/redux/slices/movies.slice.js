import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";



const initialState = {
    movies: [],
    next: null,
    prev: null
  }

const getAll = createAsyncThunk(
    'moviesSlice/getPopular',
    async ({page}) => {
        const {data} = await moviesService.getAll(page);
        return data.results
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.prev = action.payload.prev
                state.next = action.payload.next
            })
    // .addCase(getAll.rejected, (state, action) => {
    //         state.errors = action.payload
    // })
})

const {reducer: moviesReducer} = moviesSlice;
const moviesActions = {getAll};

export {moviesReducer,moviesActions}