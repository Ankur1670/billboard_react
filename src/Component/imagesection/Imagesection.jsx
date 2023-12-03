import React from 'react'
import img1 from '../../assets/img1.png'
import './imagesection.css'
const Imagesection = () => {
  return (
            <div className="imageSection mt-5">
                <img src={img1} alt="" />
                <div className="imageContent">
                    <p>Unlock the Power of</p>
                    <p>Billboard </p>
                    <p>Advertising......</p>
                    <p className="bb-2">
                    Book Your Prime Spot Today!
                    </p>
                </div>

                <div className="buttonSection ">
                    <div className="contanier">
                        <div className="row">
                            <div className="col-lg-4">
                            <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Find Your Desired City</label>
  
  </div>
  
</div>


                                </div>
                                <div className="col-lg-4">
                                <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Find Your Desired City</label>
  
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
        

  )
}

export default Imagesection
