import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    arrTodos: [],
}

const todosSlice = createSlice({
    name: 'todosSlice',

    initialState,

    reducers: {
        addTodo: (state, action) => {
            state.arrTodos.push({
                id: new Date().getTime(),
                name: action.payload.todo,
                status: false
            })
        },

    }
});

const todoReducer = todosSlice.reducer;
export const {addTodo} = todosSlice.actions;
export default todoReducer;