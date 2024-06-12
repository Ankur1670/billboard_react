import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import {Link, useNavigate} from "react-router-dom";
import logo from '../../assets/billboard_bazzar.png';
import {useDispatch, useSelector} from "react-redux";
import Alert from 'react-bootstrap/Alert';
import {errorHandling} from "../../redux_hooks/errorHandeling";
 
const Navbar = () => {
  let navigate = useNavigate();

  const errors=useSelector(state => state.errorHandling)
  const dispatch=useDispatch()


  const [show, setShow] = useState(true);
  const data=useSelector(state => state.userData)
  console.log()
  let home=window.location.href.split('//')[1].split('/')[1]===''

  return (<div className={'topHeader'}>
<div className="navbar-section" >
    <nav class="navbar navbar-expand-lg mx-5  ">
  <a class="navbar-brand" href="/"><img src={logo} style={{width:200}} alt="" /></a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to={'/'}>HOME </Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to={"/search"}>SEARCH</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={ "/cart" }>CART</Link>
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
        {errors.errorLIst.map((obj,key)=><Alert key={obj.variant} variant={obj.variant} onClose={()=> {
          dispatch(
              {type:'ERROR_REMOVE',
                payload:{index:key}})
          console.log(errors.errorLIst)
          return setShow(false)
        }}  dismissible>{obj.value}</Alert>)}

</div>
  )
}

export default Navbar
