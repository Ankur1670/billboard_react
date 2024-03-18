import React, {useEffect, useState} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import './footer.css';
import axios from "axios";
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,

});
const Footer = () => {
    const [myCompanyData, setMyCompanyData] = useState ({})
    useEffect ( () => {
        client.get('company/details/').then((r)=>{
            if(r.status===200){
                setMyCompanyData(r.data[0])
            }

        })
    }, [] );
  return (
    <div className="footer_section mt-5">
        <div className="container pt-4">
            <div className="row">
                <div className="col-lg-3 section_1">
                    <img src={myCompanyData?.logo} alt="" /> <br />
                    
                    <p className='mt-2'> <FaLocationDot /> {myCompanyData?.address}</p>
                    <p><MdCall />{myCompanyData?.mobile_number}</p>


                </div>
                <div className="col-lg-3 section_2 ">
<h3>SERVICES</h3>
<ul>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
</ul>
                </div>
                <div className="col-lg-3 section_2">
<h3>QUICK LINK</h3>
<ul>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
    <li>Flex Printing</li>
</ul>
                </div>
                <div className="col-lg-3 section_2">
<h3>LOCATION MAP</h3>
                    <iframe src={myCompanyData?.mapUrl} width="400" height="200"  loading="lazy" ></iframe>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
