import React from 'react'
import './signup.css'
import img1 from '../../assets/img1.png'
import { useNavigate} from "react-router-dom";

const Signup = () => {
    let navigate = useNavigate();

  return (
    <div className="login_section">
      <div className="">
        <div className="row">
<div className="left">
<div className="col-lg-6">
<h1 className='text-center'>Sign Up</h1>
<div className="input_section">
  <form>
  <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username"/> 

  <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>

<div className="name_section">
<input type="text" id="login" class="fadeIn second" name="First Name" placeholder="First Name"/> 
<input type="text" id="login" class="fadeIn second" name="Last Name" placeholder="Last Name"/> 


</div>
<input type="email" name="Email" id="login" placeholder="Email" />
<input type="tel" name="" id="login" placeholder="Mobile Number" />

  </form>
  <div className="button_section">
    <div className="btn">
      <button className="button mt-5">
      Sign Up
      </button>
    </div>
  </div>
  <div className="ss">
<p>Don’t have a acconut yet <span onClick={()=>{navigate('/d')}}>Login</span> </p>   
  </div>
</div>
</div>

          </div>
<div className="a">
<div className="col-lg-6">
            <img src={img1} alt="" />
          </div>
</div>
</div>
        
        
          </div>  
          
        </div>
  )
}

export default Signup
