import React from 'react'
import './pricesection.css';
import { Rating } from 'primereact/rating';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// import StarRatings from './react-star-ratings';


const Card=(obj)=>{


    return(
        
       
        <div className="container mt-3 w-75">
            <div className="row">
                <div className="col-lg-4 px-0">
                    <img src={obj.images[0]?.img} alt="" className=' img-fluid'/>
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
                <div className="col-lg-4 mt-3  rating-section" >
                <Rating value={obj.rating*10}
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5}  cancel={false}/>

<div className="button">
    <Link  to={`/billboard/${obj.id}`}>Book Now </Link>
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
