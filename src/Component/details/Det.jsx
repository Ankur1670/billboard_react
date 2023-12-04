import React from 'react'
import './det.css'
import smd1 from '../../assets/smd1.png';
import d1 from '../../assets/d1.png';
import { Rating } from 'primereact/rating';
import { useState } from 'react';

const img=[
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1
]

const Det = () => {
    const [value,setValue]=useState([])

  return (
    <div className="detail_section  ">
        <div className=" con">
            <div className="left ">
                <div className="row mt-5">
                    <div className="col-lg-2">
                    {img.map((obj)=><img src={obj}/>)}

                    </div>
                    <div className="col-lg">
                    <img src={d1} alt="" className='i' />

                    </div>
                </div>

            </div>
            <div className="right">
                
                <p className='heading'>Sarovar Portico Hotel, 56, 
                Rajpur Rd,Dehradun  
                            Sarovar Portico Hotel, 56, Rajpur Rd, Kandholi, Hathibarkala Salwala, Dehradun, Uttarakhand 248001
                </p> 
                <div className="star">
                <Rating value={4}  onChange={(e) => setValue(e.value) }  className='px-5'
                pt={{
                    onIcon: { className: 'a' },
                    offIcon: { className: 'a' },

                }}
                width={100} stars={5}  cancel={false}/>  

                <p>9,944 ratings</p>
                </div>
                <p className='px-5 jj'>₹5000/- </p>
        <div className="button_section">
            <button className="b">
                Book Now <div className='dd'>With your Design</div>
            </button>
            <button className="c">
            Create Design  <div className='dd'>and Book Now  </div>
            </button>
        </div>
                <div>
            </div>
            <div className="d px-5">
                <p>Size :- 20x30</p>
                <p>Location :- porsche </p>
                <p>Banner Type :- LED</p>
            </div>
            
            <div className="e px-5">
<p className='subH1'>Aayush Sharma</p>
<p className='subH2'>I’ll break down why your product descriptions are an incredible opportunity to engage your potential </p>
<div className="f">
<Rating value={4}  onChange={(e) => setValue(e.value) } 
                pt={{
                    onIcon: { className: 'g' },
                    offIcon: { className: 'g' },

                }}
                width={100} stars={5}  cancel={false}/>  

<p>20 Nov 2023</p>
</div>
           
            </div>

</div>
            {/* <div className="row
            ">
                <div className="col-lg-2">
                  
                </div>
                <div className="col-lg-5 img_2">
                    <img src={d1} alt="" />

                </div>
                <div className="col-lg-5 det_sec ">
                    <p>Sarovar Portico Hotel, 56,  <br />
Rajpur Rd,Dehradun
Sarovar Portico Hotel, 56, Rajpur Rd, Kandholi, Hathibarkala Salwala, Dehradun, Uttarakhand 248001
</p>
                </div>
            </div> */}
             
        </div>
       
    </div>
  )
}

export default Det;
