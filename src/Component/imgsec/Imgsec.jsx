import React, {useEffect} from 'react'
import './imgsec.css';
import axios from "axios";
import { useDispatch } from 'react-redux';



import img1 from '../../assets/img1.png'
import { useState } from 'react';

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

const Imgsec = () => {
    const [city,setCity]=useState('')
    const [cities,setCities]=useState([])
    const [location,setLocation]=useState('')
    const [locations,setLocations]=useState([])
    const [cityDBList,setCityDBList]=useState()
    const [locationDBList,setLocationDBList]=useState()
    const dispatch = useDispatch();


    useEffect(() => {

        client.get('citiesList/')
            .then((response)=>{
                if(response.status===200){setCityDBList(response.data)}
            }).catch(HandelError)
    }, [location]);
    useEffect(() => {
        console.log(city)
        let p=city!==''?`?city=${city}`:''

        client.get('addressList/'+p)
            .then((response)=>{
                if(response.status===200){setLocationDBList(response.data)}
            }).catch(HandelError)
    }, [city]);

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
    const handelSearch=()=>{
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
          <img src={ img1 } alt=""/>

              <div className="imgContent w-100 h-100">
                  <div className="buttonSection ">
                      <div className="contanier mt-5 ">
                          <div className="row d-flex justify-content-center">
                              <div className="col-lg-3">
                                  <div className="input-group">
                                      <div className="form-outline mx-auto">
                                          <label className="form-label" htmlFor="form1">Find Your Desired City</label>

                                          <input type="search" id="city" className="form-control"
                                                 onChange={ handelChangeCities } value={ city }/>
                                          <div id={ 'cities' }>{ cities.map ( ( obj ) => <a onClick={ () => {
                                              setCity ( obj )
                                              setCities ( [] )
                                          } }>{ obj }</a> ) }</div>

                                      </div>

                                  </div>


                              </div>
                              <div className="col-lg-3">
                                  <div className="input-group">
                                      <div className="form-outline mx-auto" >
                                          <label className="form-label" htmlFor="form1">Find Your Desired
                                              location</label>

                                          <input type="search" id="form1" className="form-control"
                                                 onChange={ handelChangeLocation } value={ location }/>
                                          <div id={ 'cities' }>{ locations.map ( ( obj ) => <a onClick={ () => {
                                              setLocation ( obj )
                                              setLocations ( [] )
                                          } }>{ obj }</a> ) }</div>

                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-2 d-flex align-items-end   ">
                                          <div className={ 'button m-0 ' } onClick={ handelSearch }>Search</div>


                              </div>


                          </div>
                      </div>
                  </div>
              </div>
      </div>


  )
}

export default Imgsec
