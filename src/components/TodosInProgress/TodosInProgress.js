import React from 'react';
import {useSelector} from "react-redux";

import './TodosInProgressStyle.css';
import TodoInProgress from "../TodoInProgress/TodoInProgress";


const TodosInProgress = ({lan}) => {

    const {arrTodosInProgress} = useSelector(store => store.todoReducer);

    return (
        <div className={'TodosInProgress'}>
            <div className={'TodosInProgress-text'}>{lan.tasksInProgress}</div>

            {
                arrTodosInProgress && arrTodosInProgress.map(todoInPr => <TodoInProgress
                    key={todoInPr.id}
                    todoInPr={todoInPr}
                />)
            }
        </div>
    );
};

export default TodosInProgress;