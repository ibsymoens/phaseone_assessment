import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: []
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        create_task: (state, action) => {
            return {...state, task: [action.payload, ...state.task]}
        },
        fetch_tasks: (state, action) => {
            state.task = action.payload.reverse();
        },
        delete_task: (state, action) => {
            return {...state, task: state.task.filter(task => task.id !== action.payload)}
        }
    }
});

export const { create_task, delete_task, fetch_tasks } = taskSlice.actions;
export default taskSlice.reducer;