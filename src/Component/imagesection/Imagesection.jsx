import React from 'react'
import img1 from '../../assets/img1.png'
import './imagesection.css'
import {useNavigate} from "react-router-dom";
const Imagesection = () => {
    const navigate=useNavigate()
    const goToSearch = () => {
        navigate('/search')
    }
  return (
      <div className="imageSection mt-5">
          <div className={ 'black_box' }></div>
          <img src={ img1 } alt=""/>
          <div className="imageContent">
              <p>Unlock the Power of</p>
              <p>Billboard </p>
              <p>Advertising......</p>
              <p className="bb-2">
                  Book Your Prime Spot Today!
              </p>
          </div>
        <div className={'imgContent-home w-100 buttonSection row flex-row justify-content-center m-0'}>
            <div className={'col-lg-6 col-10 col-md-8'}>
                <div className={'row'}>

                      <div className="col-lg-6  d-flex">
                          <div className={' mx-auto'}>
                                  <label className="form-label " >Find Your Desired City</label>

                              <input type="search" onClick={ goToSearch }  placeholder={'City'} id="form1" className="form-control"/>

                          </div>




                      </div>
                      <div className="col-lg-6 d-flex">
                          <div className={' mx-auto'}>
                                  <label className="form-label" >Find Your Desired Location</label>
                                  <input type="search" onClick={ goToSearch } placeholder={'Location'} id="form1" className="form-control"/>
                          </div>


                      </div>

                </div>
            </div>
            <div className="col-lg-2 d-flex align-items-end">
                <button className={ 'btn button m-0 mx-auto ' } onClick={ goToSearch }>Search</button>
            </div>

        </div>
      </div>
        

  )
}

export default Imagesection
