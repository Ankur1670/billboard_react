import React from 'react'
import {Navbar} from '../Component';
import Successfully_com from '../Component/orders/successfully';
import { useParams } from 'react-router-dom';

function Successfully() {
    let { id}=useParams();
    console.log(id)
    return (
        <div className="App">
            <Navbar />
            <Successfully_com/>

        </div>
    );
}

export default Successfully;