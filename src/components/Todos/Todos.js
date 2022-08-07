import React from 'react';
import {useSelector} from "react-redux";

import './TodosStyle.css';
import Todo from "../Todo/Todo";


const Todos = () => {
    const {arrTodos} = useSelector(store => store.todoReducer);

    return (
        <div className={'Todos'}>
            <div className={'Todos-text'}>my tasks</div>

            {
                arrTodos && arrTodos.map(tod => <Todo key={tod.id} tod={tod}/>)
            }
        </div>
    );
};

export default Todos;