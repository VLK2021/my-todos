import React from 'react';

const TodoDone = ({todo}) => {

    const {id, name} = todo;

    return (
        <div className={'TodoDone'}>

            <div className={'TodoDone-text'}>{name}</div>

        </div>
    );
};

export default TodoDone;