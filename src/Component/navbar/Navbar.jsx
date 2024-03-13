import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { useNavigate} from "react-router-dom";


import logo from '../../assets/logo.png';
import {useSelector} from "react-redux";

 
const Navbar = () => {
  let navigate = useNavigate();
  const data=useSelector(state => state.userData)
  console.log()
  let home=window.location.href.split('//')[1].split('/')[1]===''

  return (
<div className="navbar-section" >
    <nav class="navbar navbar-expand-lg mx-5  ">
  <a class="navbar-brand" href="/"><img src={logo} alt="" /></a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">HOME </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
     
      
    </ul>
   
  </div>
  <div className="button">
    {home?<button type="button" onClick={()=>{navigate('/search')}}>BOOK NOW </button>:
        data.id===-1?
              <button type="button" onClick={()=>{navigate('/login')}}>Login </button>:
              <button type="" onClick={()=>{navigate('/logout')}}>logout </button>

    }


</div>
</nav>

  
  


   </div>

  )
}

export default Navbar
