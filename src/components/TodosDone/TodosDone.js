import React from 'react';
import {useSelector} from "react-redux";

import './TodosDoneStyle.css';
import TodoDone from "../TodoDone/TodoDone";


const TodosDone = () => {
    const {arrTodosDone} = useSelector(store => store.todoReducer);


    return (
        <div className={'TodosDone'}>
            <div className={'TodosDone-text'}>my tasks</div>

            {
              arrTodosDone && arrTodosDone.map(todo => <TodoDone key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosDone;