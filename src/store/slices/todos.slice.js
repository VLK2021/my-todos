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

        addTodoInProgress: (state, action) => {
            const todoInPr = state.arrTodos.find(todo => todo.id === action.payload.id);
            const index = state.arrTodos.findIndex(todo => todo.id === action.payload.id);
            state.arrTodos.splice(index, 1);
            state.arrTodosInProgress.push(todoInPr);
        },

        addTodoDone: (state, action) => {
            const todoDone = state.arrTodosInProgress.find(todo => todo.id === action.payload.id);
            const index = state.arrTodosInProgress.findIndex(todo => todo.id === action.payload.id);
            state.arrTodosInProgress.splice(index, 1);
            state.arrTodosDone.push(todoDone);
        },

        dellTodoDone: (state, action) => {
            const index = state.arrTodosDone.findIndex(todo => todo.id === action.payload.id);
            state.arrTodosDone.splice(index, 1);
        },

        dellTodoTasks: (state, action) => {
            const index = state.arrTodos.findIndex(todo => todo.id === action.payload.id);
            state.arrTodos.splice(index, 1);
        },

        dellTodoInProgress: (state, action) => {
            const index = state.arrTodosInProgress.findIndex(todo => todo.id === action.payload.id);
            state.arrTodosInProgress.splice(index, 1);
        }
    }
});

const todoReducer = todosSlice.reducer;
export const {
    addTodo,
    addTodoInProgress,
    addTodoDone,
    dellTodoDone,
    dellTodoTasks,
    dellTodoInProgress
} = todosSlice.actions;
export default todoReducer;