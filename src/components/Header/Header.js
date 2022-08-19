import React, {useState} from 'react';

import './HeaderStyle.css';
import Form from "../Form/Form";


const Header = () => {
    const [formAddVisible, setFormAddVisible] = useState(false);

    const onchange = () => {
        document.body.classList.toggle("lightTherm")
    }


    return (
        <div className={'Header'}>
            <div className={'Header-text'}>
                my todos
            </div>

            <div>
                <input type="checkbox"
                       onChange={event => onchange(event.target.value)}
                />
            </div>

            <div className={'Header-form'}>
                {formAddVisible && <Form/>}
            </div>

            <button className={'Header-btn'} onClick={() => setFormAddVisible(!formAddVisible)}>add task</button>
        </div>
    );
};

export default Header;