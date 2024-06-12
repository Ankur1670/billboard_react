import {useState} from "react";
import axios from "axios";
import HandelError from "../utilities/handelError";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    },
});
function Generator() {
    let navigate = useNavigate();
    const billBoardData=useSelector(state => state.billBoardData)

    const [imgSrc, setImgSrc] = useState ('')
    const [text, setText] = useState ('')

    const handelApi = (e) => {
        let data = new FormData();
        data.append('text', text);
        client.post('image/generations/',data).then((r)=>{
            if(r.status===200){
                console.log(r)
                setImgSrc(r.data.img)
            }
        }).catch(HandelError)
    }
    return (<div  className={'con d-flex justify-content-center'}>
            <div className={'w-50 bg-red h-100'}>
                <br/>
                <p> Enter your Prompt </p>
                <div className={'d-flex w-100 gap-3'}>
<input type={'text'} className={'form-control input-placeholder '} onChange={(e)=>setText(e.target.value)}  value={text}/>
                    <button className={'btn btn-outline-success'} onClick={handelApi}>Generate</button></div>

                <img className={'img-fluid mt-2 mb-4'} src={imgSrc}/>

                {imgSrc?(<button className={'btn btn-outline-success'} onClick={()=>navigate(`/billboard/Booking/${billBoardData.id}`)}>Next</button>):(<></>)}

            </div>
        </div>


    );
}

export {Generator};