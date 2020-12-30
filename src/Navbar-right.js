import React, { useState } from 'react';
import './App.css';
import Search from '@material-ui/icons/Search';
import Cart from '@material-ui/icons/AddShoppingCart';
import Like from '@material-ui/icons/Favorite';
import Account from '@material-ui/icons/AccountCircle';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';



function Navbar2(props) {
    const [logins, loginh] = useState('none');
    const [carts, carth] = useState('none');
    const Login = () => {
        if (logins == 'none' ) {
            loginh('block');
            carth('none');
    
      
        } else {
            loginh('none');
        }
    }
    const CART = () => {
        if (carts === 'none') {
            carth('block');
            loginh('none');
    
        } else {
            carth('none');

        }
    }
    const hide = () => {
        carth('none');
        loginh('none');

    }
 return(
    <div className="right-buttons" style={{display:props.display}}>
        <div className="dropbtn new-dropbtn"><Search /></div>
        <div className="dropdown">
            <div className="dropbtn" onClick={hide}  onClick={Login}><Account /></div>
            <div className="dropdown-content" style={{display:logins}} >
                <div className="login-content">
                    <form action="" className="login-form">
                        <h1>Login to  Account</h1>
                        <div className="input">
                            <input type="text" name="name" id="name" placeholder="Enter Your Name" autoComplete="off" />
                            <input type="text" name=" password" id="name" placeholder="Enter Your password" autoComplete="off" />
                        </div>
                        <div className="checkbox-a" data-toggle="buttons">
                            <span href="" style={{ display: 'flex',margin: '10px 2px' }}>
                                <input type="checkbox" name="" id="" autocomplete="off" style={{ margin: '2px' }} />
                                <div>Remember me</div>
                            </span>
                            <a href="" className="forgt-pass">forget password</a>
                        </div>
                        <button className="login-btn">Login</button>
                        <div>
                            <a href="" className="cret-account">No Account?Create here?</a>
                        </div>

                        <hr className="hr-form" />
                        <h2 className="connect">Connect us</h2>
                        <ul className="social-media">
                            <a href=""><Facebook /></a>
                            <a href=""><Instagram /></a>
                            <a href=""><Twitter /></a>
                        </ul>
                    </form>

                    <div className="">

                    </div>
                </div>
            </div>
        </div>
        <div className="dropbtn"><Like /></div>
        <div className="dropdown">
            <div className="dropbtn"   onClick={CART}><Cart /></div>
             <div className="dropdown-cart " style={{
                 display: carts,
                //  overflow: 'hidden',
             }}>
                <div className="cart  ">

                    <p>Your cart is empty</p>
                </div>
            </div>
        </div>
    </div>
 )
}
export default Navbar2;