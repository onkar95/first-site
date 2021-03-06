import React, { useState } from 'react';
import image from './images/img8.jpg'
// import Button from '@material-ui/core/Button';
// import Home from './Home';
import Like from '@material-ui/icons/Favorite';
import Categori from '@material-ui/icons/SubjectRounded';
// import Showing from './Showing';
// import {Link} from 'react-router-dom'




function Boxes() {
    // console.log(props);
    const [a, b] = useState(0);

    const day = () => {
        let a = new Date().getDate()
        return a;
    }
    const month = () => {

        let today = new Date()
        let b = today.toLocaleString('default', { month: 'short' })
        return b;
    }
    const year = () => {
        let b = new Date().getUTCFullYear()
        return b;
    }
    const add = () => {
        if (a <= b) {
            b(a + 1)
        }
    }

    return (
        <>
            <div className="boxes">
                <div>
                    <img src={image} alt=" is loading" className=""></img>
                </div>
                <div>
                    <h2> Hello and Welcome</h2>
                    <div className="starting-of-box">
                        <button className="box-buttons"></button>
                        <button className="box-buttons"><Categori />Clothes</button>
                        <div className="box-buttons" ><div><Like onClick={add} /></div></div>
                        <div className="box-buttons">0 comment</div>
                    </div>
                    <p className="middle-of-box">ref attribute requires a valid value
                    to be accessible. Provide a valid, navigable address as the href
                    value. If you cannot provide a valid href, but still need the
                    a valid value to be accessible. Provide a valid, navigable re
                 ss as the href value. If you cannot provide a valid href, but still need the element to r</p>
                    <hr />
                    <div className="bottom-of-box">
                        <div className="date">
                            <span><b>{day()}</b> </span>
                        </div>

                        <div className="month-year">
                            <span>|{month()}</span>
                            <span>|{year()}</span>
                        </div>
                        <div className="show-btn">
                            <button className="bottom-box-button" >show more</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Showing style={{display:'none'}}/> */}
        </>
    )
}

export default Boxes;