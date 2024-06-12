import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Home from './pages/home';
import Book from './pages/book';
import Detail from './pages/detail';
import Generations from './pages/generations';
import Booking from './pages/booking';
import LoadingScreen from './pages/loadingScreen';
import Successfully from './pages/successfully.jsx';
import {Provider, useDispatch, useSelector} from "react-redux"
import {store} from "./redux_hook";
import React, {useEffect, useState} from "react";
import Log from './pages/log';
import Sign from './pages/sign';
import axios from "axios";
import HandelError from "./Component/utilities/handelError";
import {Navigate } from 'react-router-dom';
import Cart from "./pages/cart";
import CartPage from "./pages/cart";
import NotFound from "./pages/404";

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
    const loading=useSelector(state => state.LoadingHandling)
    console.log(data.id)
    if (data.id===-1){
        LoginCheck()
    }







    console.log(loading.loading,'asdfasd')
  return (
    <div className="App">
        {loading.loading? <LoadingScreen/>:(
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home home={true} />}/>
                    <Route path="/search" element={<Book />}/>
                    <Route path="/billboard/:id" element={<Detail />}/>
                    <Route path="/billboard/create/:id" element={< Generations />}/>
                    <Route path="/billboard/Booking/:id" element={data.id!==-1?<Booking />:<Log/>}/>
                    <Route path="/order/successfully/" element={-1 !== data.id?<Successfully />:<Log/>}/>
                    <Route path="/login" element={<Log />}></Route>
                    <Route path="/signup" element={<Sign />}/>
                    <Route path="/logout" element={<Logout />}/>
                    <Route path="/cart" element={<CartPage />}/>
                    <Route path="/*" element={<NotFound />}/>


                </Routes>
            </BrowserRouter>
        )}

    </div>
    );

}

export default App;
