import React from 'react'
import './pricesection.css';
import p1 from '../../assets/p1.png';
import { Rating } from 'primereact/rating';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import StarRatings from './react-star-ratings';

import { useState } from 'react';
import { useNavigate} from "react-router-dom";
const aa=[
    {name:'ankur',id:2},
    {name:'yash',id:3},
    {name:'ankur',id:5},
    {name:'ankur',id:8},
]
const Card=(obj)=>{
    let navigate = useNavigate();

    const [value,setValue]=useState([])

    return(
        
       
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4 px-0">
                    <img src={p1} alt="" />
                </div>
                <div className="col-lg-4 price_p">
                    <p>{obj.name} <br />
Rajpur Rd,Dehradun</p>
<p>Size: 12X18</p>
<h3>₹5000/- </h3>
                </div>
                <div className="col-lg-4 mt-3" >
                <Rating value={4} onChange={(e) => setValue(e.value) } 
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5} cancel={false}/>

<div className="pbutton">
    <button type="button" onClick={()=>navigate(`/b/${obj.id}`)}>Book Now {obj.id}</button>
</div>

                </div>
               
              


            </div>
        </div>
        
    
    )
}

const PriceSection = () => {
    let navigate = useNavigate();

  return (
    <div className="price_section" >
     {aa.map(Card)}
    </div>
    
  )
}

export default PriceSection
