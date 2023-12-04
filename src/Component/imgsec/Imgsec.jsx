import React from 'react'
import './imgsec.css';
import p1 from '../../assets/p1.png';

import img1 from '../../assets/img1.png'
import { Rating } from 'primereact/rating';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import StarRatings from './react-star-ratings';

import { useState } from 'react';
const cc=[
    'Dehradun',
    'goa',

]
const Imgsec = () => {
    const [value,setValue]=useState([])
    const [city,setCity]=useState()
    const [cities,setCities]=useState([])
    const [location,setLocation]=useState()
    const handelChange=(obj)=>{
        var st='';

            setCities([])
        console.log(cities)
            const a=cc.map((obj2)=>{
                if (obj2.includes(obj.target.value)){
                    // if ()
                    setCities([...cities,obj2])
                }
            })



    }


  return (
    <div className="imgSec">
    <img src={img1} alt="" />
    <div className="a">
        
    <div className="imgContent">
    <div className="buttonSection ">
                    <div className="contanier">
                        <div className="row">
                            <div className="col-lg-4">
                            <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
      <label className="form-label" htmlFor="form1">Find Your Desired City</label>

      <input type="search" id="city" class="form-control" onChange={handelChange} value={city}/>
      <div id={'cities'}>{cities.map((obj)=><a>{obj}</a>)}</div>

  </div>
  
</div>


                                </div>
                                <div className="col-lg-4">
                                <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control"  value={location}/>
    <label class="form-label" for="form1">Find Your Desired location</label>
  
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input id="search-focus" type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  
</div>
                    </div>
                    

            
                </div>
            </div>
            
   </div>
   
    </div>
   
    </div>
 

  
</div>


  )
}

export default Imgsec
