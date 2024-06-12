import {Button, Loading} from "../loading/loading";
import {useEffect, useState} from "react";
import {client,client_m} from "../../Axios";
import HandelError from "../utilities/handelError";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
let date_format=new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'})

const Cart = () => {
    const navigate=useNavigate()

    const default_data_type={image:'',start_date:'',end_data:''}
    const [load, setLoad] = useState (false)
    const [multi, setMulti] = useState (true)
    const [cartData, setCartData] = useState ([])
    const [single_data, setSingle_data] = useState (default_data_type)
    const [multiData, setMultiData] = useState ([])
    const dispatch=useDispatch()
    const [state, setState] = useState ()

    useEffect ( () => {
        client.get('cart/').then((r)=>{
            if(r.status===200){
                setCartData(r.data)
                setMultiData(r.data.map((o)=>{return {id: o.id,billboard:o.billboard.id}}))

            }
        }).catch((e)=>HandelError(e,dispatch,setState))
    }, [] );

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
    // const changeImgData = (file) => {
    //     const reader = new FileReader()
    //
    //     reader.readAsDataURL(file)
    //
    //     reader.onload = () => {
    //         console.log('called: ', reader)
    //         setBase64IMG(reader.result)
    //     }
    // }
    const handelBooking = (data) => {
        console.log(data)
        let form=new FormData()
        form.append('billboard',JSON.stringify(data))
        form.append('callBackUrl',window.location.href)
        client_m.post('billBoard/history/cart/',form).then((r)=>{
            if(r.status===200){
                window.location.href=r.data?.link
            }
        }).catch((e)=>HandelError(e,dispatch,setState))


    }
    const handelSelect = (e) => {
        console.log(e.target.value)

        setMulti( e.target.value === 'true')
    }
    const handelDelete=(id,index)=>{
        console.log(id,index)
        let form =new FormData()
        form.append('cart_id',id)
        console.log(form)
        client.delete('cart/', {data:form}).then((r)=>{
            if(r.status===200){
                setCartData(cartData.filter((obj,number)=>number!==index))

            }
        }).catch((e)=>HandelError(e,dispatch,setState))


    }
    const handelChangeSingle = (name,value,file=false) => {
        console.log(name,value)

        if (!file){
            setSingle_data( {...single_data,[name]:value})
            let data=multiData.map((obj)=>{return {...obj,[name]:value}})
            console.log(data)
            setMultiData(data)
        }
        else{

            const reader = new FileReader()
            reader.readAsDataURL(value)
            reader.onload = () => {
                let data=multiData.map((obj)=>{return {...obj,[name]:reader.result}})
                setMultiData(data)
            }
        }

    }
    const handelChangeMulti = (id,value,name, file=false) => {
        console.log(multiData,value)

        if (!file){
            let data=multiData.filter((obj)=> obj.id===id)
            let o= {...data[0],[name]:value}
            setMultiData( [...multiData.filter((obj)=> obj.id!==id

            ),o])
        }
        else{

            let data=multiData.filter((obj)=> obj.id===id)
            const reader = new FileReader()

            reader.readAsDataURL(value)

            reader.onload = () => {
                console.log('called: ', reader)
                let o= {...data[0],[name]:reader.result}
                setMultiData( [...multiData.filter((obj)=> obj.id!==id

                ),o])
            }


        }

        console.log(multiData)
    }
    console.log(cartData.length===0)

    return (
       <div style={{paddingTop:'7rem',width:"100vw",height:"100hv"}}  className={'d-flex justify-content-center book_form'}>


           <div className={'w-75 p-2'} style={{backgroundColor:'#DFD7BF'}} >

                       <div className={'w-100 d-flex flex-column  flex-md-row justify-content-center mb-4 mt-5 '}>
                           <div className={'w-25 d-flex flex-column  flex-md-row mb-md-0 mb-4  justify-content-center '}>
                               <select style={{width:100}} onChange={handelSelect} className={'form-control'}>
                                   <option value={true}>Single</option>
                                   <option value={false}>Multi</option>
                               </select>
                           </div>

                           {multi?<div className={'d-flex w-100 flex-column  align-items-center flex-md-row justify-content-around gap-4'}>
                               <input type={'file'}  onChange={(e)=>handelChangeSingle(e.target.name,e.target.files[0],true)} name={'image'}  className={'form-control '}/>

                               <input type={'date'} value={single_data.start_date} onChange={(e)=>handelChangeSingle(e.target.name,e.target.value)} name={'start_date'} className={'form-control'}/>
                               <input type={'date'} value={single_data.end_date}  onChange={(e)=>handelChangeSingle(e.target.name,e.target.value)}  name={'end_date'} className={'form-control'}/>
                           </div>:''}


                       </div>

                       {multi?<table className={'table'}>
                           <thead className={'fw-bold'}>
                           <tr>
                               <td className={''} > Location</td>


                               <td className={''}> Price</td>
                               <td className={''}> </td>
                           </tr>
                           </thead>
                           {cartData.length===0?'':
                               <>
                           <tbody>

                           {cartData.map((obj,index)=> <tr>
                               <td className={'col-9'}> {obj.billboard.address.full_address}</td>
                               <td className={'col-2'}> { obj.billboard.price }/Month</td>
                               <td className={'col-1'}> <img onClick={(e)=>handelDelete(obj.id,index)}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII="/></td>
                           </tr>)}


                           </tbody></>}
                       </table>:<table className={'table'}>
                           <thead className={'fw-bold'}>
                           <tr>
                               <td > Location</td>
                               <td> File</td>
                               <td> Start Date</td>
                               <td> End Date</td>
                               <td> Price</td>
                               <td> </td>
                           </tr>
                           </thead>
                           {cartData.length===0?"":
                               <>
                           <tbody>

                           {cartData.map((obj,index)=>

                               <tr>
                                   <td> { obj.billboard.address.full_address }</td>
                                   <td><input type={ 'file' } name="image" onChange={ ( e ) => handelChangeMulti (obj.id,e.target.files[0],e.target.name,true) }/></td>
                                   <td><input type={ 'date' } name="start_date" onChange={ ( e ) => handelChangeMulti (obj.id,e.target.value,e.target.name) }/></td>
                                   <td><input type={ 'date' } name="end_date" onChange={ ( e ) => handelChangeMulti (obj.id,e.target.value,e.target.name) }/></td>
                                   <td> { obj.billboard.price }/Month</td>
                                   <td><img onClick={ ( e ) => handelDelete ( obj.id, index ) }
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAv0lEQVR4nO2VXQrCMBAGxwtalZY86NkVLP6hN6hQCaQgJdXdsFHEDOQt+02TbBooFP6JBrgBB2ChqFsCJ+AK1FrpLBT2YXSAE9S5MHeo8xlqLk8BEvlY6sc5RbyKBE3JY9IuZCRRRwLvwGbUC7E561SpRJ5N+m4rpUdhvvJsK5XKs0qZONNYw31E2ueUu280V/Piykjuubl0wFxeGfwyfYaa1uCR2KeIjwbPos9QU4Uv3iq3zM/dhdp5irhQ+E0ekyummbane5EAAAAASUVORK5CYII="/>
                                   </td>
                               </tr>
                           )}

                           </tbody>
                               </>}
                       </table>}


               {cartData.length===0?<div colSpan={2} className={'d-flex  w-100 justify-content-center'}><Loading></Loading></div>:''}

                       <div className={'booking_button'}>
                           <Button className={'input'} value={'Book Now'} callback={()=>handelBooking(multiData)} state={load}></Button>
                       </div>




           </div>
       </div>

    )
}

export default Cart
