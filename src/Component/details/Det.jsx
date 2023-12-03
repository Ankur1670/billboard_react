import React from 'react'
import './det.css'
import smd1 from '../../assets/smd1.png';
import d1 from '../../assets/d1.png';
const img=[
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1 ,
    smd1
]

const det = () => {
  return (
    <div className="detail_section  ">
        <div className=" con">
            <div className="left ">
                <div className="row mt-5">
                    <div className="col-lg-2">
                    {img.map((obj)=><img src={obj}/>)}

                    </div>
                    <div className="col-lg-5">
                    <img src={d1} alt="" className='i' />

                    </div>
                </div>

            </div>
            <div className="right">
                <p>Sarovar Portico Hotel, 56, 
Rajpur Rd,Dehradun
Sarovar Portico Hotel, 56, Rajpur Rd, Kandholi, Hathibarkala Salwala, Dehradun, Uttarakhand 248001
</p>
            </div>

            {/* <div className="row">
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

export default det
