import React, { useState } from 'react';
import './App.css';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Close from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom'


function Sidebar() {
    const [hide, show] = useState();


    const openNav = () => {
        if (hide === 'none') {
            show('flex')
        }
        else { show('none') }
    }
    const closeSidebar = () => {
        show('none')
    }

    return (
        <>
            <button className="openbtn" onClick={openNav}>&#9776;</button>
            <div id="sidebar">
                <div id="mySidebar" className="sidebar" style={{
                    display: hide,
                    overflowY: 'scroll'
                      }}>
                    <button className="close-btn1" onClick={closeSidebar}><Close /></button>

                    <div className="language">
                        <h4>language</h4>
                        <div className="language-name">
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                            <Link to="">English</Link>
                        </div>
                    </div>
                    <div className="language">
                        <h4>language</h4>
                        <div className="language-name">
                            <div><Link>Aus$</Link></div>
                            <div><Link>Aus$</Link></div>
                            <div><Link>Aus$</Link></div>
                            <div><Link>Aus$</Link></div>
                        </div>
                    </div>
                    <hr />
                    <div className="sidebar-text">
                        <h3>Welcome to our store</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, placeat perspiciatis!
                            Beatae sequi aperiam at
                                   </p>
                        </div>
                    </div>
                    <div className="connectus" style={{ marginBottom: '20px' }}>
                        <h2 className="connect">Connect us</h2>
                        <ul className="social-media">
                            <Link to=""><Facebook /></Link>
                            <Link to=""><Instagram /></Link>
                            <Link to=""><Twitter /></Link>
                        </ul>
                    </div>
                </div>
                <div id="main" className="">
                </div>
            </div>

        </>
    )
}

export default Sidebar;