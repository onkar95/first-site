import React, { useState } from 'react';
import image from './images/img8.jpg'
import Button from '@material-ui/core/Button';
import Home from './Home';
import Like from '@material-ui/icons/Favorite';
import Categori from '@material-ui/icons/SubjectRounded';
import Showing from './Showing';
import Boxes from './Boxes';


function Extrabox() {
    return (
        <>
            <Boxes />
            <Showing/>
        </>
    )
    
}

export default Extrabox;