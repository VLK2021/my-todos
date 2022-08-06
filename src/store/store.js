import {configureStore} from "@reduxjs/toolkit";

import todoReducer from "./slices/todos.slice";


const store = configureStore({
    reducer: {
        todoReducer
    }
});

export default store;