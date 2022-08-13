import React from 'react';
import {useDispatch} from "react-redux";

import './TodoDoneStyle.css';
import {dellTodoDone} from "../../store/slices/todos.slice";


const TodoDone = ({todo}) => {
    const dispatch = useDispatch();

    const {id, name} = todo;

    return (
        <div className={'TodoDone'}>
            <div className={'TodoDone-text'}>{name}</div>

            <div className={'TodoDone-block-btn'}>
                <button className={'TodoDone-btn-del'}  onClick={()=>dispatch(dellTodoDone({id}))}>delete</button>
            </div>
        </div>
    );
};

export default TodoDone;