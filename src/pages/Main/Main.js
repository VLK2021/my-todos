import React from 'react';

import './MainStyle.css';
import Todos from "../../components/Todos/Todos";
import TodosInProgress from "../../components/TodosInProgress/TodosInProgress";
import TodosDone from "../../components/TodosDone/TodosDone";


const Main = () => {

    return (
        <div className={'Main'}>
            <Todos/>

            <TodosInProgress/>

            <TodosDone/>
        </div>
    );
};

export default Main;