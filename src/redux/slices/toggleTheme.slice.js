import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme:'light'
}

const ThemeSlice = createSlice({
    name: 'ThemeSlice',
    initialState,
    reducers:{changeTheme: (state, action) =>{state.theme = action.payload}}
})

const {reducer:themeReducer, actions:{changeTheme}}=ThemeSlice
const themeActions = {changeTheme}

export {themeActions, themeReducer}