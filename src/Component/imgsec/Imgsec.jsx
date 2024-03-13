import React, {useEffect} from 'react'
import './imgsec.css';
import p1 from '../../assets/p1.png';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';



import img1 from '../../assets/img1.png'
import { Rating } from 'primereact/rating';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import StarRatings from './react-star-ratings';
import { useState } from 'react';
import { store } from '../../redux_hook'

const base_url = process.env.REACT_APP_URL;
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json'
    },
});
const HandelError=(error)=>{
    alert('error')
    console.log(error)
}
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
    const [cityDBList,setCityDBList]=useState()
    const [locationDBList,setLocationDBList]=useState()
    const [billBoard,setBillBoard]=useState([])
    const dispatch = useDispatch();


    useEffect(() => {

        client.get('citiesList/')
            .then((response)=>{
                if(response.status===200){setCityDBList(response.data)}
            }).catch(HandelError)
    }, []);
    useEffect(() => {

        client.get('addressList/')
            .then((response)=>{
                if(response.status===200){setLocationDBList(response.data)}
            }).catch(HandelError)
    }, []);

    useEffect(() => {
        client.get(`billBoard/`).then((response)=>{
            if(response.status===200){
                dispatch({
                    type: 'DATA_ADD',
                    payload: response.data
                });

            }
        }).catch(HandelError)
    }, []);

    const handelSuggest = (obj,data,name) => {
        let list=[]
        if (obj.target.value.length>0){
            data.map((obj2)=>{
                if (obj2[name].toLowerCase().includes(obj.target.value.toLowerCase())){
                    list.push(obj2[name])


                }
            })
        }
      return list
    }
    const handelChangeCities=(obj)=>{
        const list =handelSuggest(obj,cityDBList,'city')
        setCities(list)
        setCity(obj.target.value)

    }
    const handelChangeLocation=(obj)=>{
        const list =handelSuggest(obj,locationDBList,'address')
        setLocations(list)
        setLocation(obj.target.value)

    }
    const handelSearch=(obj)=>{
        client.get(`billBoard/?city=${city}&address=${location}`).then((response)=>{
            if(response.status===200){
                dispatch({
                    type: 'DATA_ADD',
                    payload: response.data
                });

            }
        }).catch(HandelError)
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
  <div class="form-outline button" data-mdb-input-init>
    <button className={''} onClick={handelSearch}>Search</button>
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
