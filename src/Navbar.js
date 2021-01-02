import React, { useState } from 'react';
import './App.css';
// import Search from '@material-ui/icons/Search';
// import Cart from '@material-ui/icons/AddShoppingCart';
// import Like from '@material-ui/icons/Favorite';
// import Facebook from '@material-ui/icons/Facebook';
// import Instagram from '@material-ui/icons/Instagram';
// import Twitter from '@material-ui/icons/Twitter';
import NavbarRights from "./Navbar-right";
import Close from '@material-ui/icons/Clear';
import {  useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import NavButton from './Nav-button';

function Navbar() {
    const [hide, show] = useState();
    const [l, m] = useState('0px');
    const [hideNavbar, showNavbar] = useState();
    let location = useLocation();
    // let width = () => {

    // }


    const openNav = () => {
        if (hide === 'none') {
            show('flex')
        }
        else { show('none') }
    }
    const closeSidebar = () => {
        show('none')
    }

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

    const smallScreen = () => {
        let nav = document.getElementById("smallNav");
        let btn = document.getElementById("btn")
        return (nav.style.display = 'none',
            btn.style.display = 'none'
        )
    }
    const closeMenu = () => {
        if (hideNavbar === 'flex') {
            showNavbar('none')
            m('flex')

        }
        

    }
    return (
        <>
            <div id="navbar">
                <div className="heading">My Store</div>
                <div className="small-nav"  >
                    <button className="navbar1-small-button" style={{ display: l }} id="btn" onMouseLeave={closeMenu} onClick={openMenu}>&#9776;</button>
                    <div >
                        <div className="navbar-r1  smallScreen-navbar-r1 " style={{ display: hideNavbar }} >
                            <button className="close-btn" style={{ display: m }} onClick={openMenu}><Close /></button>
                            <Sidebar />
                            <NavButton smallScreen={smallScreen}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="right-nav"><NavbarRights /></div>
                </div>
                <div className="navbar-r1 " style={{ display: hideNavbar }} >
                    <button className="close-btn" onClick={openMenu}><Close /></button>
                    <Sidebar />
                    <NavButton />
                    <NavbarRights display="none"/>
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