
import React from 'react';
import image from './images/img8.jpg'

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer-items">
                    &copy;
                    Nova all rights reserved.
        </div>
                <div className="footer-li">
                    <ul className="footer-links footer-items">
                        <div><a href="">Contact Press</a></div>
                        <div><a href="">FAQ</a></div>
                        <div><a href="">Shipping & Returns</a></div>
                        <div><a href="">Term & Conditions</a></div>
                    </ul>
                </div>
                {/* <div className="footer-img footer-items">
            <a href=""> <img src={image} alt="" /></a>
            <a href=""> <img src={image} alt="" /></a>
            <a href=""> <img src={image} alt="" /></a>
            <a href=""> <img src={image} alt="" /></a>
        </div> */}
            </div>
        </>
    )
}

export default Footer;
