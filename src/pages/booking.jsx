import React from 'react'
import {Navbar} from '../Component';
import Bookform from '../Component/bookform/bookform';
import { useParams } from 'react-router-dom';

function Booking() {
    let { id}=useParams();
    console.log(id)
    return (
        <div className="App">
            <Navbar  />
            <Bookform/>
        </div>
    );
}

export default Booking;