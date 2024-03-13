import React, {useEffect} from 'react'
import './det.css'
import smd1 from '../../assets/smd1.png';
import doFormat from '../utilities/time'
import d1 from '../../assets/d1.png';
import { Rating } from 'primereact/rating';
import { useState } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";

const img=[
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1
]
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
const Det = () => {
    let navigate = useNavigate();
    const [value,setValue]=useState([])
    const billBoardData=useSelector(state => state.billBoardData)
    const dispatch=useDispatch()
    useEffect(() => {
        let list=window.location.href.split('//')[1].split('/')
        client.get(`billBoard/${list[list.length-1]}`).then((response)=>{
            if(response.status===200){
                dispatch({
                    type: 'BILLBOARD_DATA_ADD',
                    payload: response.data
                });

            }
        }).catch(HandelError)
    }, []);
    console.log(billBoardData)
    if(billBoardData.id===-1){

        return (
            <div>
                Loading....
            </div>
        )
    }

  return (
    <div className="detail_section  ">
        <div className=" con">
            <div className="left">
                <div className="left-element">
                    <div className="w-25">
                    {billBoardData.images.slice(1).map((obj)=><img className={'w-100 h-100'} src={obj.img}/>)}
                    </div>
                    <div className="w-75">
                    <img src={billBoardData.images[0].img} alt="" className='w-75' />

                    </div>
                </div>

            </div>
            <div className="right">
                
                <p className='heading'>
                    {billBoardData.address.address+' '}
                    {billBoardData.address.landmark}
                    {billBoardData.address.city +' '}
                    {billBoardData.address.state +' '}
                    {billBoardData.address.country +' '}
                </p> 
                <div className="star">
                <Rating value={billBoardData.rating*10}  className='px-5'
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5}  cancel={false}/>  

                <p>{billBoardData.reviews.length}</p>
                </div>
                <p className='px-5 jj'>₹{billBoardData.price}/- </p>
        <div className="button_section">
            <button className="b" onClick={()=>navigate(`/billboard/Booking/${billBoardData.id}`)}>
                Book Now <div className='dd'>With your Design</div>
            </button>
            <button className="c">
            Create Design  <div className='dd'>and Book Now  </div>
            </button>
        </div>
                <div>
            </div>
            <div className="d px-5">
                <p>Size :- {billBoardData.size}</p>
                <p>Location :- {billBoardData.location_type} </p>
                <p>Banner Type :- {billBoardData.banner_type}</p>
            </div>
                {
                    billBoardData.reviews.map((obj)=>{
                        let date=doFormat(obj.datetime)
                        return(
                        <div className="e px-5">
                            <p className='subH1'>{obj.user}</p>
                            <p className='subH2'>{obj.text}</p>
                            <div className="f">
                                <Rating value={obj.rating}
                                        pt={{
                                            onIcon: { className: 'g' },
                                            offIcon: { className: 'g' },

                                        }}
                                        width={100} stars={5}  cancel={false}/>

                                <p className='subH3'>{date}</p>
                            </div>

                        </div>)
                    })
                }


</div>

             
        </div>
       
    </div>
  )
}

export default Det;
