import React from 'react';
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Information from "../components/Information/Information";


const Layout = ({lan, setLan}) => {

    return (
        <div className={'Layout'}>
            <Header setLan={setLan} lan={lan}/>

            <div className={'outlet'}>
                <Outlet/>
            </div>

            <Information lan={lan}/>

            <Footer/>
        </div>
    );
};

export default Layout;