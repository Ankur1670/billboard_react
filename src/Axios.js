import axios from "axios";
import HandelError from "./Component/utilities/handelError";
let t={}
if(localStorage.getItem('token')){
    t={'Authorization':`Bearer ${localStorage.getItem('token')}`}
}


const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json',
            ...t
    },
})

const client_m = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'multipart/form-data',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    },
});

export {client,client_m}