import React, {useState} from 'react';
import { BsSun, BsMoonFill } from "react-icons/bs";

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

            <div className={'input'}>
                <div><BsSun/></div>
                <div><input  className={'inputStyle'} type="checkbox" onChange={event => onchange(event.target.value)}/></div>
                <div><BsMoonFill/></div>
            </div>

            <div className={'Header-form'}>
                {formAddVisible && <Form/>}
            </div>

            <button className={'Header-btn'} onClick={() => setFormAddVisible(!formAddVisible)}>add task</button>
        </div>
    );
};

export default Header;