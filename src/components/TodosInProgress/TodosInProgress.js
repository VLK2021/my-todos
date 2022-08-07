import React from 'react';
import {useSelector} from "react-redux";

import './TodosInProgressStyle.css';


const TodosInProgress = () => {

    const {arrTodosInProgress} = useSelector(store => store.todoReducer);

    return (
        <div className={'TodosInProgress'}>
            <div className={'TodosInProgress-text'}>tasks in progress</div>

            {
                arrTodosInProgress && arrTodosInProgress.map(todoInPr => <div key={todoInPr.id}>{todoInPr.name}</div>)
            }
        </div>
    );
};

export default TodosInProgress;