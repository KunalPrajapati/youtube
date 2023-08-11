import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import darkSlice from "./darkSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        dark:darkSlice,
    }
});



export default store;