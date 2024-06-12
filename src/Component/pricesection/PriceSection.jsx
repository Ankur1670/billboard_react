import React, {useState} from 'react'
import './pricesection.css';
import { Rating } from 'primereact/rating';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Loading} from "../loading/loading";
import {client} from "../../Axios";
import HandelError from "../utilities/handelError";


// import StarRatings from './react-star-ratings';


const Card=(obj,dispatch,setLoading_sate)=>{
    // const [buttonLoading, setButtonLoading] = useState (false)
    let is_added_in_cart=obj.is_added_in_cart
    const handelCart = (obj) => {
        if(obj.is_added_in_cart){

        }else{
            let form = new FormData()
            form.append('billboard_id',obj.id)
            client.post('cart/',form).then((r)=>{
                    if(r.status===200){
                        // setButtonLoading(false)
                        is_added_in_cart=true
                        obj.is_added_in_cart=true
                        dispatch({type:'DATA_UPDATE_is_added_in_cart',
                            payload:obj})


                    }


                }

            ).catch((e)=>HandelError(e,dispatch,setLoading_sate))
        }
        }


    return(
        
       
        <div className="container mt-3 w-75">
            <div className="row">
                <div className="col-lg-4 col-sm-12 px-0">
                    <img src={obj.images[0]?.img} alt="" className=' img-fluid' style={{height:300,
                        width:"100%"
                    }}/>
                </div>
                <div className="col-lg-4  price_p">
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
                <div className="col-lg-4 mt-3  d-flex flex-column justify-content-around   rating-section" >
                <div className={'d-flex justify-content-start  justify-content-md-center'}>

                <Rating  className={''}  value={obj.rating}
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5}  cancel={false}/>
                </div>

                <div className={'d-flex pb-4 pb-md-0 justify-content-md-around justify-content-start gap-md-0 gap-4 '}>
                    <Link   className="button  " to={`/billboard/${obj.id}`}>Book Now </Link>
                    <Button   className="button" value={obj.is_added_in_cart?"Added":'Add cart'}
                        callback={()=>handelCart(obj)}> </Button>

                </div>
                                </div>
               
              


            </div>
        </div>
        
    
    )
}

const PriceSection = () => {
    const todos = useSelector(state =>state.authReducer);
    const LoadingHandling = useSelector(state =>state.LoadingHandling);
    const dispatch=useDispatch()
    const [loading_sate, setLoading_sate] = useState (false)


    console.log(todos.data)


  return (
    <div className="price_section" >
     {LoadingHandling.billBoardDataLoading?<div className={'d-flex justify-content-center'}><Loading></Loading></div>:todos.data.map((obj)=>Card(obj,dispatch,setLoading_sate))}
    </div>
    
  )
}

export default PriceSection
