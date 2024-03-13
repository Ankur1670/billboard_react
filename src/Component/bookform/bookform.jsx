import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import HandelError from "../utilities/handelError";

const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNDE2MzMyOCwiaWF0IjoxNzA5ODQzMzI4LCJqdGkiOiIzMmFiZTg2NmU2Nzc0OGIwYmM1NzUwZGM2NmQ0NDA5YiIsInVzZXJfaWQiOjF9.77Nid0M2UJa4FaMboG8jhgm6c_CEgR3vTEHLFUVRYus'
    },
});
const BookingForm = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({
        start_date:'',
        end_date:'',
        image:'',
        billboard:window.location.href.split('//')[1].split('/'),
    })
    console.log(window.location.search)
    useEffect(() => {
        if (window.location.search){
            client.get(`payment_verify/${window.location.search}`).then((r)=>{
                if(r.status===200){
                        dispatch({
                            type:'BILLBOARD_BOOKING_REQUEST_DATA',
                            payload:r.data
                        })
                        navigate('/order/successfully')

                }
            })
        }
    }, []);
    const handelsubmit = (e) => {
        e.preventDefault();
        const form =new FormData()
        form.append('start_date',formData.start_date)
        form.append('end_date',formData.end_date)
        form.append('image',formData.image)
        form.append('billboard',formData.billboard[formData.billboard.length-1])
        form.append('callBackUrl',window.location.href)

        client.post('billBoard/history/',form).then((r)=>{
        if ( r.status==200){
            window.location.href=r.data.payment
        }
        }).catch(HandelError)

    }
    const handelChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
    }
  return(
      <form className={''} style={{paddingTop:'400px'}} onSubmit={handelsubmit}>
          <input type={"date"} onChange={handelChange}  value={formData.start_date} name={'start_date'}/>
          <input type={"date"} onChange={handelChange}  value={formData.end_date}  name={'end_date'}/>
          <input type={"file"}
                 onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.files[0]})}
                  name={'image'}/>
          <input type={"submit"}  name={'submit'} value={"Book"}/>

      </form>
  )
}

export default BookingForm