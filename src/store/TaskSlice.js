import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    tasks: [],
    filter: ''
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter: (state, action) =>  {
            state.filter = action.payload
        },
    },
});

export const {
    addTask,
    toggleTask,
    setFilter
} = tasksSlice.actions;