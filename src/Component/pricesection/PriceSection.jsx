import React from 'react'
import './pricesection.css';
import p1 from '../../assets/p1.png';
import { Rating } from 'primereact/rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


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


    return(
        
       
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4 px-0">
                    <img src={obj.images[0]?.img} alt="" />
                </div>
                <div className="col-lg-4 price_p">
                    <p>
                        {obj.address.address+' '}
                        {obj.address.landmark}
                        <br />
                        {obj.address.city +' '}
                        {obj.address.state +' '}
                        {obj.address.country +' '}
                        </p>
                    <p>Size: {obj.size}</p>
                    <h3>₹{obj.price}/- </h3>
                </div>
                <div className="col-lg-4 mt-3" >
                <Rating value={obj.rating*10}
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5}  cancel={false}/>

<div className="button">
    <Link className={'button'} to={`/billboard/${obj.id}`}>Book Now {obj.id}</Link>
</div>

                </div>
               
              


            </div>
        </div>
        
    
    )
}

const PriceSection = () => {
    const todos = useSelector(state =>state.authReducer);
    console.log(todos.data)


  return (
    <div className="price_section" >
     {todos.data.map(Card)}
    </div>
    
  )
}

export default PriceSection
