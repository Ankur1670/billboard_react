import React from 'react'
import './services.css'
import service from '../../assets/service.png'

const Services = () => {
  return (
    <div className="serviceSection">
        <h1>OUR SERVICES</h1>
        <div className="servicebox">
        <div className="container ">
            <div className="row">
                <div className="col-lg-3">
                    <div class="card" >
  <img class="card-img-top" src={service} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Flex Printing</h5>
    <p class="card-text">Our primary focus is to build a particular brand image, shape culture and attain sustainable market growth.</p>
  </div>
  
  <div class="card-body">
  <button type="button" class="btn btn-primary bt1 ">Enquiry</button>
<button type="button" class="btn btn-secondary bt2 ">Details</button>  </div>
</div>
                </div>
                <div className="col-lg-3">
                <div class="card" >
  <img class="card-img-top" src={service} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Flex Printing</h5>
    <p class="card-text">Our primary focus is to build a particular brand image, shape culture and attain sustainable market growth.</p>
  </div>
  
  <div class="card-body">
  <button type="button" class="btn btn-primary bt1 ">Enquiry</button>
<button type="button" class="btn btn-secondary bt2 ">Details</button>  </div>
</div>
                </div>
                <div className="col-lg-3">
                <div class="card" >
  <img class="card-img-top" src={service} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Flex Printing</h5>
    <p class="card-text">Our primary focus is to build a particular brand image, shape culture and attain sustainable market growth.</p>
  </div>
  
  <div class="card-body">
  <button type="button" class="btn btn-primary bt1 ">Enquiry</button>
<button type="button" class="btn btn-secondary bt2">Details</button>  </div>
</div>
                </div>
                <div className="col-lg-3">
                <div class="card" >
  <img class="card-img-top" src={service} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Flex Printing</h5>
    <p class="card-text">Our primary focus is to build a particular brand image, shape culture and attain sustainable market growth.</p>
  </div>
  
  <div class="card-body">
  <button type="button" class="btn btn-primary bt1 ">Enquiry</button>
<button type="button" class="btn btn-secondary bt2 ">Details</button>  </div>
</div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Services
