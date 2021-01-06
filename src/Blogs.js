import React from 'react';
import './App.css';
import Boxes from './Boxes';
// import image from './images/img8.jpg'
// import Arrowl from '@material-ui/icons/ArrowBackIos';
// import Arrowr from '@material-ui/icons/ArrowForwardIos';
// import {Link, useLocation} from 'react-router-dom'
import Showing from './Showing';
// import {Link} from 'react-router-dom'


function Blog() {
    return (
        <>

            <div id="blog">
                <div className="blog">
                    <div className="blog-h1">
                        <h1>welcome to my blog</h1>
                    </div>
                    <div className="blog-box-container">
                        <Boxes/>
                        <Boxes/>
                        <Boxes/>
                        <Boxes/>
                        <Boxes/>
                        <Boxes/>
                    </div>
                    <Showing num="1-6 of 9"/>
                </div>
            </div>

        </>
    )
}


export default Blog;
