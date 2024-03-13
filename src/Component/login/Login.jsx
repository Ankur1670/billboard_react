import React, {useState} from 'react'
import './login.css'
import img1 from '../../assets/img1.png'
import { useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import HandelError from "../utilities/handelError";
const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json'
    },
});
const Login = () => {
  let navigate = useNavigate();
  const [loginData,setLoginData]=useState({})
    const dispatch=useDispatch()


    const handelLogin = () => {
    const form=new FormData()
      form.append('username',loginData.username)
      form.append('password',loginData.password)
      client.post('login/',form).then((r)=>{
          if(r.status===200){
              console.log(r.data)
              dispatch({
                  type:'UserDataUpdate',
                  payload:r.data
              })
          }
      }).catch(HandelError)

  }
  return (
    <div className="login_section">
      <div className="container">
        <div className="row">
<div className="left">
<div className="col-lg-6">
<h1 className='text-center'>Login</h1>
<div className="input_section">
  <form>
  <input type="text"
         onChange={(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})}
         value={loginData.username}
         id="login" className="fadeIn second" name="username" placeholder="Username"/>

  <input type="password"
         onChange={(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})}
         value={loginData.password}
         id="password"
         className="fadeIn third" name="password" placeholder="Password"/>


  </form>
  <div className="button_section">
    <div className="btn">
      <button className="button mt-5" onClick={handelLogin}>
        Log In
      </button>
    </div>
  </div>
  <div className="ss">
<p>Don’t have a acconut yet <span onClick={()=>{navigate('/signup')}}>Sign up</span> </p>
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
