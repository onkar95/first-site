import React from 'react';
// import Navbar from './Navbar';
import './App.css';
// import Search from '@material-ui/icons/Search';
// import Cart from '@material-ui/icons/AddShoppingCart';
// import Like from '@material-ui/icons/Favorite';
// import Facebook from '@material-ui/icons/Facebook';
// import Instagram from '@material-ui/icons/Instagram';
// import Twitter from '@material-ui/icons/Twitter';
// import Navbar2 from "./Navbar-right";
// import Close from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom'




function NavButton() {
    // const [hide, show] = useState();
    // const [l, m] = useState('0px');
    // const [hideNavbar, showNavbar] = useState();
    // let location = useLocation();
    // let width = () => {
        
    // }


    // const openNav = () => {
    //     if (hide === 'none') {
    //         show('flex')
    //     }
    //     else { show('none') }
    // }
    // const closeSidebar = () => {
    //     show('none')
    // }

    // const openMenu = () => {
    //     if (hideNavbar === 'none') {
    //         showNavbar('flex')
    //         m('none')

    //     }
    //     else {
    //         showNavbar('none')
    //         m('flex')
    //     }
        
    // }
    // const smallScreen = () => {
    //     let nav = document.getElementById("smallNav");
    //     let btn=document.getElementById("btn")
    //     return (nav.style.display = 'none',
    //     btn.style.display='none'
    //     )
    // }



    return (
        <div className="nav-button">
            <div className="dropdown">
                <Link className="dropbtn" to='/home'  >HOME</Link>
                <div className="dropdown-content">
                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/shop' >SHOP</Link>
                <div className="dropdown-content">

                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/page' >PAGE</Link>
                <div className="dropdown-content">

                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <Link className="dropbtn" to='/about' >About</Link>
                <div className="dropdown-content">

                    <div className="dropdown-content-grid">
                        <Link to="">Link 1</Link>
                        <Link to="">Link 2</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
                        <Link to="">Link 3</Link>
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
    )
}


export default NavButton;