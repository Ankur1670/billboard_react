import {Loading} from "../Component/loading/loading";
import Spinner from "react-bootstrap/Spinner";
import React from "react";

function LoadingScreen() {
    return (
        <div className=" d-flex flex-column justify-content-center" style={{height:'100vh',width:"100vw"}}>
            <div className={'d-flex justify-content-center'}>
               <Loading></Loading>
            </div>

        </div>
    );
}

export default LoadingScreen;