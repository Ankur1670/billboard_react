import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import HandelError from "../utilities/handelError";
import './book.css'
import {Button} from "../loading/loading";
import {client_m,client} from"../../Axios"

const BookingForm = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [spinner,setSpinner]=useState(false)

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
        setSpinner(true)
        e.preventDefault();
        let date=new Date(formData.start_date)
        let date2=new Date(formData.end_date)

        if(date2 - date<86400000){
            dispatch({
                type:'ERROR_APPEND',
                payload:{variant:'danger',value:"End Date is Wrong"},

            })
            console.log(date2 - date)
            setSpinner(false)
            return
        }

        //calculate days difference by dividing total milliseconds in a day
        console.log(date2.getDate() - date.getDate())
        const form =new FormData()
        form.append('start_date',formData.start_date)
        form.append('end_date',formData.end_date)
        form.append('image',formData.image)
        form.append('billboard',formData.billboard[formData.billboard.length-1])
        form.append('callBackUrl',window.location.href)

        client_m.post('billBoard/history/',form).then((r)=>{
        if ( r.status==200){
            window.location.href=r.data.payment
            setSpinner(false)
        }
        }).catch((e)=>HandelError(e,dispatch,setSpinner))

    }
    const handelChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
    }
  return(
      <form className={'book_form px-3'} >
        <div className="uplode_file">
        <input type={"file"}
                 onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.files[0]})}
                  name={'image'}/>
        </div>
         
                  <div className="start_date">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6 text-center">
                            <h3 >Start Date</h3> 
                  <input type={"date"}  className={''} onChange={handelChange}  value={formData.start_date} name={'start_date'}/>
                            </div>
                            <div className="col-md-6 text-center    ">
                            <h3>End Date</h3> 
                            <input  type={"date"} className={''} onChange={handelChange}  value={formData.end_date}  name={'end_date'}/>
                            </div>
                        </div>
                    </div>
                    
                  
         
          </div>
        
        <div className="booking_button">
            <Button value={"Book"} state={spinner} className={'input'} callback={handelsubmit}></Button>

        </div>

      </form>
  )
}

export default BookingForm