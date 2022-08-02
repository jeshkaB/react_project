import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {genresService} from "../../services";


const initialState = {
    genres: [],
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async () => {
        const {data} = await genresService.getAll();
        return data.genres
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            // .addCase(getAll.rejected, (state, action) => {
            //         state.errors = action.payload
            // })
})

const {reducer: genresReducer} = genresSlice;
const genresActions = {getAll};

export {genresReducer, genresActions}