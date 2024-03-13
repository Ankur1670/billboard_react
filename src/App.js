import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/home';
import Book from './pages/book';
import Detail from './pages/detail';
import Booking from './pages/booking';
import Successfully from './pages/successfully.jsx';
import {Provider, useDispatch, useSelector} from "react-redux"
import {store} from "./redux_hook";
import React, {useEffect, useState} from "react";
import Log from './pages/log';
import Sign from './pages/sign';
import axios from "axios";
import HandelError from "./Component/utilities/handelError";
import {Navigate } from 'react-router-dom';

const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
    },
});
let isLogin=false

function LoginCheck() {
    const dispatch=useDispatch()


    client.get('profile/').then((r)=>{
        if(r.status===200){
            dispatch({
                type:'UserDataUpdate',
                payload:r.data
            })
            // setIsLogin(true)
        }
    }).catch(HandelError)



}
const Logout = () => {
    let navigate = useNavigate();
  localStorage.clear()
    const dispatch=useDispatch()
    dispatch({
        type:'UserDataUpdate',
        payload:{id:-1}
    })

    navigate("/")
}
function App() {

    const data=useSelector(state => state.userData)
    console.log(data.id)
    if (data.id===-1){
        LoginCheck()
    }







    console.log(isLogin)
  return (
    <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home home={true} />}/>
                    <Route path="/search" element={<Book />}/>
                    <Route path="/billboard/:id" element={<Detail />}/>
                    <Route path="/billboard/Booking/:id" element={data.id!==-1?<Booking />:<Log/>}/>
                    <Route path="/order/successfully/" element={-1 !== data.id?<Successfully />:<Log/>}/>
                    <Route path="/login" element={<Log />}></Route>
                    <Route path="/signup" element={<Sign />}/>
                    <Route path="/logout" element={<Logout />}/>


                </Routes>
            </BrowserRouter>
    </div>
    );

}

export default App;
