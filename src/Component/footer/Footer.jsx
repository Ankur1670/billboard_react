import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import './footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="footer_section mt-5">
        <div className="container pt-4">
            <div className="row">
                <div className="col-lg-3 section_1">
                    <img src={logo} alt="" /> <br />
                    
                    <p className='mt-2'> <FaLocationDot /> 206 Gangotri Vihar,Near Classic Apartment,Canal Road, Dehradun City, Dehradun, Uttarakhand 248001</p>
                    <p><MdCall /> +91-9358108720</p>


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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.7638010428805!2d78.06498358312021!3d30.35766200970686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7bfa88a11ad%3A0x99eb84b046b83ed7!2sCanal%20Rd%2C%20Gangotri%20Vihar%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1701360013617!5m2!1sen!2sin" width="400" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
