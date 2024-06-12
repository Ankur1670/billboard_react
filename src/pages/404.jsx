import Navbar from "../Component/navbar/Navbar";
import {wait} from "@testing-library/user-event/dist/utils";
import {useNavigate} from "react-router-dom";

function NotFound() {
    let navigate = useNavigate();
    wait(10)
    navigate('/')
  return (
      <>
      <Navbar></Navbar>
    <div className="d-flex justify-content-center align-content-between" style={{paddingTop:'9rem',width:"100vw",height:"100hv"}}>
     <h1 style={{fontSize:300}}>404</h1>
    </div>
      </>
  );
}

export default NotFound;