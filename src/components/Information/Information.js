import React from 'react';
import {useSelector} from "react-redux";

import './InformationStyle.css';


const Information = () => {
    const {arrTodos} = useSelector(store => store.todoReducer);

    return (
        <div className={'Information'}>
            <div>my tasks:</div>
            <div>{arrTodos.length}</div>
        </div>
    );
};

export default Information;