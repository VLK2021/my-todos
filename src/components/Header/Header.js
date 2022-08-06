import React from 'react';

import './HeaderStyle.css';

const Header = () => {


    const addTask = () => {

    }

    return (
        <div className={'Header'}>
            <div className={'Header-text'}>
                my todos
            </div>

            <button className={'Header-btn'} onClick={addTask}>add task</button>
        </div>
    );
};

export default Header;