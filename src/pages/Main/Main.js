import React from 'react';

import './MainStyle.css';
import Todos from "../../components/Todos/Todos";
import TodosInProgress from "../../components/TodosInProgress/TodosInProgress";


const Main = () => {

    return (
        <div className={'Main'}>
            <Todos/>

            <TodosInProgress/>
        </div>
    );
};

export default Main;