import React, {useState} from 'react'
import './signup.css'
import img1 from '../../assets/img1.png'
import { useNavigate} from "react-router-dom";
import axios from "axios";
import HandelError from "../utilities/handelError";
import {useDispatch} from "react-redux";
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json'
    },
});
const Signup = () => {
    let navigate = useNavigate();
    const dispatch=useDispatch()

    const [signUpData, setSignUpData] = useState({})
const handelChange = (e) => {
  setSignUpData({...signUpData,[e.target.name]:e.target.value})
}
const handelSignup=()=>{
        let form=new FormData()
    form.append('mobile_number',signUpData.mobile_number)
    form.append('username',signUpData.username)
    form.append('password',signUpData.password)
    form.append('first_name',signUpData.first_name)
    form.append('last_name',signUpData.last_name)
    form.append('email',signUpData.email)
    client.post('register/',form).then((r)=>{
        if( r.status===201){
            console.log(r.data)
            dispatch({
                type:'UserDataUpdate',
                payload:r.data
            })
        }

    }).then(HandelError)
}
  return (
    <div className="login_section">
      <div className="">
        <div className="row">
<div className="left">
<div className="col-lg-6">
<h1 className='text-center'>Sign Up</h1>
<div className="input_section">
  <form>
  <input type="text" id="login" value={signUpData.username} onChange={handelChange} class="fadeIn second" name="username" placeholder="Username"/>

  <input type="password" id="password" value={signUpData.password} onChange={handelChange} class="fadeIn third" name="password" placeholder="Password"/>

<div className="name_section">
<input type="text" id="login" value={signUpData.first_name} onChange={handelChange} class="fadeIn second" name="first_name" placeholder="First Name"/>
<input type="text" id="login" value={signUpData.last_name} onChange={handelChange} class="fadeIn second" name="last_name" placeholder="Last Name"/>


</div>
<input type="email" value={signUpData.email} onChange={handelChange} name="email" id="login" placeholder="Email" />
<input type="tel" value={signUpData.mobile_number} onChange={handelChange} name="mobile_number" id="login" placeholder="mobile_number" />

  </form>
  <div className="button_section">
    <div className="btn">
      <button className="button mt-5" onClick={handelSignup}>
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
