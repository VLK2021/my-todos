import React from 'react';
import {useSelector} from "react-redux";

import './InformationStyle.css';


const Information = () => {
    const {arrTodos, arrTodosInProgress, arrTodosDone} = useSelector(store => store.todoReducer);

    return (
        <div className={'Information'}>
            <div className={'Information-tasks'}>
                <div>my tasks:</div>
                <div>{arrTodos.length}</div>
            </div>

            <div className={'Information-tasksInPr'}>
                <div>tasks in progress:</div>
                <div>{arrTodosInProgress.length}</div>
            </div>

            <div className={'Information-tasksDone'}>
                <div>tasks is done:</div>
                <div>{arrTodosDone.length}</div>
            </div>

        </div>
    );
};

export default Information;