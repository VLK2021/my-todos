import React from 'react';
import {useDispatch} from "react-redux";

import './TodoInProgressStyle.css';
import {addTodoDone} from "../../store/slices/todos.slice";


const TodoInProgress = ({todoInPr}) => {
    const dispatch = useDispatch();

    const {id, name} = todoInPr;


    return (
        <div className={'TodoInProgress'}>
            <div className={'TodoInProgress-text'}>{name}</div>

            <div className={'TodoInProgress-block-btn'}>
                <button className={'TodoInProgress-btn-done'}  onClick={()=>dispatch(addTodoDone({id}))}>go done</button>
            </div>
        </div>
    );
};

export default TodoInProgress;