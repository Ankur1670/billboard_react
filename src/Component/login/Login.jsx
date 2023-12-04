import React from 'react'
import './login.css'
import img1 from '../../assets/img1.png'
import { useNavigate} from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="login_section">
      <div className="container">
        <div className="row">
<div className="left">
<div className="col-lg-6">
<h1 className='text-center'>Login</h1>
<div className="input_section">
  <form>
  <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username"/> 

  <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"/>


  </form>
  <div className="button_section">
    <div className="btn">
      <button className="button mt-5">
        Log In
      </button>
    </div>
  </div>
  <div className="ss">
<p>Don’t have a acconut yet <span onClick={()=>{navigate('/e')}}>Sign up</span> </p>   
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

export default Login
