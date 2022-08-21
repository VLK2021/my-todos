import React from 'react';
import {useSelector} from "react-redux";

import './InformationStyle.css';


const Information = ({lan}) => {
    const {arrTodos, arrTodosInProgress, arrTodosDone} = useSelector(store => store.todoReducer);

    return (
        <div className={'Information'}>
            <div className={'Information-tasks'}>
                <div>{lan.myTasks}:</div>
                <div>{arrTodos.length}</div>
            </div>

            <div className={'Information-tasksInPr'}>
                <div>{lan.tasksInProgress}:</div>
                <div>{arrTodosInProgress.length}</div>
            </div>

            <div className={'Information-tasksDone'}>
                <div>{lan.tasksDone}:</div>
                <div>{arrTodosDone.length}</div>
            </div>

        </div>
    );
};

export default Information;