import React from 'react';

import './MainStyle.css';
import Todos from "../Todos/Todos";


const Main = () => {

    return (
        <div className={'Main'}>
            <Todos/>
            <div className={'Main-todos'}>

            </div>

            <div className={'Main-inProgress'}>

            </div>

            <div className={'Main-done'}>

            </div>
        </div>
    );
};

export default Main;