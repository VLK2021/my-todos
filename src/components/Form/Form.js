import React from 'react';
import {useDispatch} from "react-redux";

import './FormStyle.css';
import {addTodo} from "../../store/slices/todos.slice";


const Form = ({lan}) => {
    const dispatch = useDispatch();


    const submit = (e) => {
        e.preventDefault();

        if (e.target.todo.value.length > 3 && e.target.todo.value.length < 30) {
        dispatch(addTodo({todo: e.target.todo.value}));
        } else {
            alert('name must have more than 3 characters and name should have less than 30 characters!!!')
        }

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