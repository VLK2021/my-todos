import React, {useState} from 'react';
import {BsSun, BsMoonFill} from "react-icons/bs";

import './HeaderStyle.css';
import Form from "../Form/Form";
import {strings} from "../../language/Language";


const Header = ({setLan, lan}) => {
    const [formAddVisible, setFormAddVisible] = useState(false);



    const onchange = () => {
        document.body.classList.toggle("lightTherm")
    }

    const changeLanguage = (e) => {
        if (e.target.value === 'ua') {
            setLan(strings._props.ua)
        }
        if (e.target.value === 'en') {
            setLan(strings._props.en)
        }
    }

    return (
        <div className={'Header'}>
            <div className={'Header-text'}>
                {lan.nameApp}

            </div>

            <div className={'input'}>
                <div><BsSun/></div>
                <div><input className={'inputStyle'} type="checkbox" onChange={event => onchange(event.target.value)}/>
                </div>
                <div><BsMoonFill/></div>
            </div>

            <div className={'Header-form'}>
                {formAddVisible && <Form lan={lan}/>}
            </div>

            <select defaultValue="en" className={'select'} onChange={changeLanguage}>
                <option value="en">en</option>
                <option value="ua">ua</option>
            </select>

            <button className={'Header-btn'} onClick={() => setFormAddVisible(!formAddVisible)}>{lan.nameBtnHeader}</button>
        </div>
    );
};

export default Header;