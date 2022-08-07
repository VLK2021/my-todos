import React from 'react';
import {useSelector} from "react-redux";

import './TodosStyle.css';
import Todo from "../../components/Todo/Todo";


const Todos = () => {
    const {arrTodos} = useSelector(store => store.todoReducer);

    return (
        <div className={'Todos'}>
            {
                arrTodos && arrTodos.map(tod => <Todo key={tod.id} tod={tod}/>)
            }
        </div>
    );
};

export default Todos;