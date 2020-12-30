import React from 'react';
// import image from './images/img8.jpg'

function Contact() {
    return (
        <>
            <div id="contact">
                <div className="contact-text">
                    <div className="contact-txt">
                        <i></i>
                        <h1 className="contact-h1">Get in touch</h1>
                        <p className="contact-p">Subscribe for latest stories and blog</p>
                    </div>
                </div>
                <div className="contact-form">
                    <input type="text " placeholder="enter your email" />
                    <button>subscribe</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Contact;