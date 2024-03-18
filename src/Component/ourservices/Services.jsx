import React, {useEffect, useState} from 'react'
import './services.css'
import axios from "axios";
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,

});
const ServiceCard = (obj) => {
  return(
      <div className="col-lg-3">
          <div className="card" >
              <img className="card-img-top" src={obj.image} alt="Card image cap"/>
              <div className="card-body">
                  <h5 className="card-title">{obj.name}</h5>
                  <p className="card-text">{obj.details}</p>
              </div>

              <div className="card-body">
                  <button type="button" className="btn btn-primary bt1 ">Enquiry</button>
                  <button type="button" className="btn btn-secondary bt2 ">Details</button>  </div>
          </div>
      </div>

  )
}
const Services = () => {
    const [serviceData, setServiceData] = useState ([])
    useEffect ( () => {
        client.get('our/services/').then((r)=>{
            if(r.status===200){
                setServiceData(r.data)
        }

        })
    }, [] );
  return (
    <div className="serviceSection">
        <h1>OUR SERVICES</h1>
        <div className="servicebox">
        <div className="container ">
            <div className="row">
                {serviceData.map(ServiceCard)}

            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Services
