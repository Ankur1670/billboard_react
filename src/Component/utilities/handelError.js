import Alert from 'react-bootstrap/Alert';
import {useDispatch} from "react-redux";
import {useState} from "react";
import {wait} from "@testing-library/user-event/dist/utils";
import {useNavigate} from "react-router-dom";
const HandelError=(error,dispatch,state,location)=>{
    console.log('adsfasd',error.response.status)

    if(error.response.status===400){
        let error_s=JSON.stringify(error?.response?.data?.error)
        dispatch({
            type:'ERROR_APPEND',
            payload:{variant:'danger',value:error_s},
        })
        // alert(error?.response?.data?.error)
        state(false)
        console.log(error.response)
    }
    else if(error.response.status===401) {
        console.log('adsfasd')
        alert('you are not login plz login')
        // window.location.href=location?`/login?location=${location}`:`/login`

    }
    else{
        console.log(error.response.data.error)
        dispatch({
            type:'ERROR_APPEND',
            payload:{variant:'danger',value:"Some thing went Wrong"},
        })
        // alert(error?.response?.data?.error)
        state(false)
        console.log(error.response)
    }

}
export default HandelError