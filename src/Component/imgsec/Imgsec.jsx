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
    const [locations,setLocations]=useState([])
    const handelSuggest = (obj) => {
        let list=[]
        if (obj.target.value.length>0){
            cc.map((obj2)=>{
                if (obj2.toLowerCase().includes(obj.target.value.toLowerCase())){
                    list.push(obj2)
                }
            })
        }
      return list
    }
    const handelChangeCities=(obj)=>{
        const list =handelSuggest(obj)
        setCities(list)
        setCity(obj.target.value)

    }
    const handelChangeLocation=(obj)=>{
        const list =handelSuggest(obj)
        setLocations(list)
        setLocation(obj.target.value)

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

      <input type="search" id="city" class="form-control" onChange={handelChangeCities} value={city}/>
      <div id={'cities'}>{cities.map((obj)=><a onClick={()=>{
          setCity(obj)
          setCities([])
      }}>{obj}</a>)}</div>

  </div>
  
</div>


                                </div>
                                <div className="col-lg-4">
                                <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
      <label className="form-label" htmlFor="form1">Find Your Desired location</label>

      <input type="search" id="form1" class="form-control" onChange={handelChangeLocation} value={location}/>
      <div id={'cities'}>{locations.map((obj)=><a onClick={()=>{
          setLocation(obj)
          setLocations([])
      }}>{obj}</a>)}</div>

                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div class="input-group">
  <div class="form-outline" data-mdb-input-init>    
    <button className={'button'}>Search</button>
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
