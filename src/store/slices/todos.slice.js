import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    arrTodos: [],
    arrTodosInProgress: [],
    arrTodosDone: [],
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


        dellTodo: (state, action) => {
            const index = state.arrTodos.findIndex(todo => todo.id === action.payload.id);
            state.arrTodos.splice(index, 1);
        },

        addTodoInProgress: (state, action) => {
            const todoInPr = state.arrTodos.find(todo => todo.id === action.payload.id);
            state.arrTodosInProgress.push(todoInPr);
        },


        dellTodoInProgress: (state, action) => {
            const index = state.arrTodosInProgress.findIndex(todo => todo.id === action.payload.id);
            state.arrTodosInProgress.splice(index, 1);
        },

        addTodoDone: (state, action) => {
            const todoDone = state.arrTodosInProgress.find(todo => todo.id === action.payload.id);
            state.arrTodosDone.push(todoDone);
        },

    }
});

const todoReducer = todosSlice.reducer;
export const {addTodo, dellTodo, addTodoInProgress, dellTodoInProgress, addTodoDone} = todosSlice.actions;
export default todoReducer;