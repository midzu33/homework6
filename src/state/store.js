import {configureStore} from "@reduxjs/toolkit";
import darkModeReducer from '../pages/darkModeSlice.js'

export const store = configureStore({
    reducer:{
    darkMode:darkModeReducer
    }
})