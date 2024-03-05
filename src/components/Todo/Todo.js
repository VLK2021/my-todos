import React from 'react';
import {useDispatch} from "react-redux";

import './TodoStyle.css';
import {addTodoInProgress, dellTodoTasks} from "../../store/slices/todos.slice";


const Todo = ({tod}) => {
    const dispatch = useDispatch();

    const {id, name} = tod;

    return (
        <div className={'Todo'}>
            <div className={'Todo-text'}>{name}</div>

            <div className={'Todo-block-btn'}>
                <button className={'Todo-btn-pro'}
                        onClick={() => dispatch(addTodoInProgress({id}))}>
                    go to in progress
                </button>

                <button className={'Todo-btn-del'}
                        onClick={() => dispatch(dellTodoTasks({id}))}>
                    delete
                </button>
            </div>
        </div>
    );
};

export default Todo;