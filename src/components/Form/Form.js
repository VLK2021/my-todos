import React from 'react';
import {useDispatch} from "react-redux";

import './FormStyle.css';
import {addTodo} from "../../store/slices/todos.slice";


const Form = ({lan}) => {
    const dispatch = useDispatch();


    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo({todo: e.target.todo.value}));
        console.log(e.target.todo.value);
        e.target.reset()
    }


    return (
        <div className={'Form'}>
            <form onSubmit={submit}>
                <input type="text"  name={'todo'} placeholder={'write name task'} className={'Form-input'}/>
                <button className={'Form-btn'}>{lan.btnAddTaskName}</button>
            </form>
        </div>
    );
};

export default Form;