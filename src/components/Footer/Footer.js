import React from 'react';

import './FooterStyle.css';
import logo512 from './logo512.png';


const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className={'Footer-logo'}>
                <img src={logo512} alt="logo"/>
                <div className={'footer-text'}>React Redux 2022</div>
            </div>
            <h5>Copyright © 2022 Volodymyr Kostiuk.</h5>
        </div>
    );
};

export default Footer;