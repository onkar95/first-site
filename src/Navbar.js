import React, { useState } from 'react';
import './App.css';
import Search from '@material-ui/icons/Search';
import Cart from '@material-ui/icons/AddShoppingCart';
import Like from '@material-ui/icons/Favorite';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Navbar2 from "./Navbar-right";
import Close from '@material-ui/icons/Clear';
import {Link, useLocation} from 'react-router-dom'

function Navbar() {
    const [hide, show] = useState();
    const [l, m] = useState('0px');
    const [hideNavbar, showNavbar] = useState();
    let location = useLocation();
    let width = () => {
        
    }


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
    const closeMenu = () => {
        if (hideNavbar === 'none' ) {
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
                <div className="small-nav">
                    <div>
                        <button className="navbar1-small-button" style={{display:l}} onClick={openMenu }>&#9776;</button>
                    </div>
                    <div className="right-nav"><Navbar2 /></div>
                </div>
                <div className="navbar-r1 " style={{ display: hideNavbar }} >
                <button className="close-btn"  onClick={openMenu }><Close/></button>
                    <div id="sidebar">
                        <div id="mySidebar" className="sidebar" style={{
                            display: hide,
                            overflowY:'scroll'

                        }}>
                <button className="close-btn1"  onClick={closeSidebar }><Close/></button>

                            <div className="language">
                                <h4>language</h4>
                                <div className="language-name">
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                    <a href="#">English</a>
                                </div>
                            </div>
                            <div className="language">
                                <h4>language</h4>
                                <div className="language-name">
                                    <div><a href="#">Aus$</a></div>
                                    <div><a href="#">Aus$</a></div>
                                    <div><a href="#">Aus$</a></div>
                                    <div><a href="#">Aus$</a></div>
                                </div>
                            </div>
                            <hr />
                            <div className="sidebar-text">
                                <h3>Welcome to our store</h3>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat perspiciatis!
                                    Beatae sequi aperiam at
                                    voluptatibus iusto unde aliquam a assumenda error nisi corporis, voluptatem rem.
                                    Expedita voluptatum
                                    voluptatibus totam!
                                   </p>
                                </div>
                            </div>
                            <div className="connectus" style={{ marginBottom: '20px' }}>
                                <h2 className="connect">Connect us</h2>
                                <ul className="social-media">
                                    <a href=""><Facebook /></a>
                                    <a href=""><Instagram /></a>
                                    <a href=""><Twitter /></a>
                                </ul>
                            </div>
                        </div>
                        <div id="main" className="">
                        </div>
                    </div>
                    <button className="openbtn"   onClick={openNav}>&#9776;</button>
                    <div className="nav-button">
                            <div className="dropdown">
                                <Link className="dropbtn" to='/home' >HOME</Link>
                                <div className="dropdown-content">
                                    <div className="dropdown-content-grid">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                            <Link className="dropbtn" to='/shop' >SHOP</Link>
                                <div className="dropdown-content">

                                    <div className="dropdown-content-grid">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                            <Link className="dropbtn" to='/page' >PAGE</Link>
                                <div className="dropdown-content">

                                    <div className="dropdown-content-grid">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                            <Link className="dropbtn" to='/about' >About</Link>
                                <div className="dropdown-content">

                                    <div className="dropdown-content-grid">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown">
                            <Link className="dropbtn" to='/blog' >BLOG</Link>
                            </div>
                            <div className="dropdown">
                            <Link className="dropbtn" to='/contact' >CONTACT</Link>
                            </div>
                    </div>
                    <Navbar2 display="none" />
                </div>
                <div className="navbar-r2">
                    <div className="schema">
                        <div>{ window.location.pathname}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;