import {useSelector} from "react-redux";

const HandelError=(error)=>{
    alert('error')
    console.log(error)
}
const Successfully_com = () => {
    const data=useSelector(state => state.billBoardBookingData)
    console.log(data)
    return(
        <div style={{paddingTop:'400px'}}>
            {data.razorpay_payment_link_status}
        </div>
    )
}

export default Successfully_com