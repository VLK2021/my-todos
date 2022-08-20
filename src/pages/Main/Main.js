import React from 'react';

import './MainStyle.css';
import Todos from "../../components/Todos/Todos";
import TodosInProgress from "../../components/TodosInProgress/TodosInProgress";
import TodosDone from "../../components/TodosDone/TodosDone";


const Main = ({lan}) => {

    return (
        <div className={'Main'}>
            <Todos lan={lan}/>

            <TodosInProgress lan={lan}/>

            <TodosDone lan={lan}/>
        </div>
    );
};

export default Main;