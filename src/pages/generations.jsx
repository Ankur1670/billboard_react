import React from 'react'
import {Navbar} from '../Component';
import {Generator} from '../Component/generations/Generator';

import { useParams } from 'react-router-dom';

function Generations() {
    let { id}=useParams();
    return (
        <div className="App">
            <Navbar />
            <Generator/>
        </div>
    );
}

export default Generations;