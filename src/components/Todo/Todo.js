import React from 'react';

import './TodoStyle.css';


const Todo = ({tod}) => {
    const {id, name} = tod;

    return (
        <div className={'Todo'}>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export default Todo;