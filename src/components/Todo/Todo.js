import React from 'react';

import './TodoStyle.css';
import {useDispatch} from "react-redux";
import {addTodoInProgress, dellTodo} from "../../store/slices/todos.slice";


const Todo = ({tod}) => {
    const dispatch = useDispatch();

    const {id,name} = tod;

    return (
        <div className={'Todo'}>
            <div className={'Todo-text'}>{name}</div>

            <div className={'Todo-block-btn'}>
                <button className={'Todo-btn-pro'}  onClick={()=>dispatch(addTodoInProgress({id}))}>go pr</button>
                <button className={'Todo-btn-del'}  onClick={()=>dispatch(dellTodo({id}))}>delete</button>
            </div>
        </div>
    );
};

export default Todo;