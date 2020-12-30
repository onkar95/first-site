import React from 'react';
import './App.css';
import Boxes from './Boxes';
import image from './images/img8.jpg'
// import Arrowl from '@material-ui/icons/ArrowBackIos';
// import Arrowr from '@material-ui/icons/ArrowForwardIos';
// import {Link, useLocation} from 'react-router-dom'
import Showing from './Showing';

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
                        <Boxes/>
                        <Boxes/>
                    </div>
                    <Showing />
                </div>
                <div className="blog-menu">
                    <div className="menu-home">
                        <h2>home</h2>
                        <hr />
                        <ul>
                            <li>cloths</li>
                            <li>Accessories</li>
                            <li>blogs</li>
                        </ul>
                    </div>
                    <div className="menu-categories">
                        <h2>Blog Categories</h2>
                        <hr />
                        <button>categorie 1</button>
                        <div className="dropdown">
                            <button className="dropbtn collaps">+</button>
                            <div className="dropdown-content">
                                <a href="">Link 1</a>
                                <a href="">Link 2</a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-articles">
                        <h2>Recent Articles</h2>
                        <hr />
                        <div className="menu-article">
                            <img src={image} alt="image is loading"></img>
                            <div className="menu-article-content">
                                <a href="" className="article-link">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                <p>Dec ,18 2020</p>
                            </div>
                        </div>
                        <hr />

                    </div>
                    <div className="menu-tag-post">
                        <h2>Tags Post</h2>
                        <hr />
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                        <a href="" className="posts">Onkar</a>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Blog;
