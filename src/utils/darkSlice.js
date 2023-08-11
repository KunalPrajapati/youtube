import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
    name: 'dark',
    initialState : {
        isDarkMode : false,
    },
    reducers : {
        toggleDarkMode : (state) =>{
            state.isDarkMode = !state.isDarkMode;
        }
    }
})


export const { isDarkMode } = darkSlice.actions;
export default darkSlice.reducer;