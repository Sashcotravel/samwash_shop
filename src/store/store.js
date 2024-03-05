import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './TaskSlice.js'



export default configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});