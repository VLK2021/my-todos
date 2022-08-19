import React, {useState} from 'react';
import {BsSun, BsMoonFill} from "react-icons/bs";
import {language} from "../../language/Language";

import './HeaderStyle.css';
import Form from "../Form/Form";


const Header = () => {
    const [formAddVisible, setFormAddVisible] = useState(false);

    const onchange = () => {
        document.body.classList.toggle("lightTherm")
    }

    const changeLanguage = (e) => {

    }


    return (
        <div className={'Header'}>
            <div className={'Header-text'}>
                my todos
            </div>

            <div className={'input'}>
                <div><BsSun/></div>
                <div><input className={'inputStyle'} type="checkbox" onChange={event => onchange(event.target.value)}/>
                </div>
                <div><BsMoonFill/></div>
            </div>

            <div className={'Header-form'}>
                {formAddVisible && <Form/>}
            </div>

            <select name="lan" className={'select'} onChange={changeLanguage}>
                <option value="ua">ua</option>
                <option value="en">en</option>
            </select>

            <button className={'Header-btn'} onClick={() => setFormAddVisible(!formAddVisible)}>add task</button>
        </div>
    );
};

export default Header;