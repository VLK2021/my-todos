import React from 'react';

import './LayoutStyle.css';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Information from "../components/Information/Information";


const Layout = () => {
    return (
        <div className={'Layout'}>
            <Header/>

            <div className={'outlet'}>
                <Outlet/>
            </div>

            <Information/>

            <Footer/>
        </div>
    );
};

export default Layout;