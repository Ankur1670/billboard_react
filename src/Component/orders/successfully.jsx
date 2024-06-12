import {useSelector} from "react-redux";
import './successfully.css'

const HandelError=(error)=>{
    alert('error')
    console.log(error)
}
const Successfully_com = () => {
    const data=useSelector(state => state.billBoardBookingData)
    console.log(data)
    return(
        <div style={{paddingTop:'200px'}} className={'d-flex justify-content-center text-center'} >
            {/*<h1>{data.razorpay_payment_link_status}</h1>*/}




            <div className="success-card">
                <div style={{borderRadius:200, height:200, width:200, background: '#F8FAF5', margin:'0px auto'}} className={'d-flex justify-content-center'}>
                    <i className="checkmark success-i">✓</i>
                </div>
                <h1  className={'success-h1'}>Success</h1>
                <p className={'success-p'}>Your Payment is Successfully
                    <br/>
                    razorpay payment ID: {data.razorpay_payment_id}
                    <br/>
                    razorpay payment link reference ID: {data.razorpay_payment_link_reference_id}
                </p>
            </div>

        </div>
    )
}

export default Successfully_com