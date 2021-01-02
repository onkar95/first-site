import React, { useState } from 'react';
import './App.css';
import NavbarRights from "./Navbar-right";
import Close from '@material-ui/icons/Clear';
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import NavButton from './Nav-button';

function Navbar() {
    const [l, m] = useState('0px');
    const [hideNavbar, showNavbar] = useState();
    let location = useLocation();

    const openMenu = () => {
        if (hideNavbar === 'none') {
            showNavbar('flex')
            m('none')

        }
        else {
            showNavbar('none')
            m('flex')
        }

    }

    return (
        <>
            <div id="navbar">
                <div className="heading">My Store</div>
                <div className="small-nav"  >
                    <button className="navbar1-small-button" style={{ display: l }} id="btn" onClick={openMenu}>&#9776;</button>
                    <div >
                        <div className="navbar-r1  smallScreen-navbar-r1 " style={{ display: hideNavbar }} >
                            <button className="close-btn" style={{ display: m }} onClick={openMenu}><Close /></button>
                            <Sidebar />
                            <NavButton />
                        </div>
                    </div>
                    <div className="right-nav"><NavbarRights /></div>
                </div>
                <div className="navbar-r1 "  >
                    <button className="close-btn" onClick={openMenu}><Close /></button>
                    <Sidebar />
                    <NavButton />
                    <NavbarRights />
                </div>
                <div className="navbar-r2">
                    <div className="schema">
                        <div>{location.pathname}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;