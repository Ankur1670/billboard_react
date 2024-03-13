import { createStore } from 'redux';
import { combineReducers } from "redux"
import { applyMiddleware, compose } from "redux";
import axios from "axios";

const billBoardListInitialState = {
    data: [],
}
const billBoardInitialState = {
    id:-1,
    // rating:0
}


const authReducer = (state = billBoardListInitialState, action) => {
    switch (action.type) {
        case 'DATA_UPDATE':
            return {
                ...state,
                data:[...state.data,action.payload]};
        case 'DATA_ADD':
            return {...state,
            data:action.payload};
        default:
            return state;
    }
}

const billBoardData=(state=billBoardInitialState, action)=> {
    switch (action.type) {
        case 'BILLBOARD_DATA_ADD':
            return action.payload;
        default:
            return state;
    }
}
const billBoardBookingDataInitialState = {
    id:-1,
    // rating:0
}
const billBoardBookingData=(state=billBoardBookingDataInitialState, action)=> {
    switch (action.type) {
        case 'BILLBOARD_BOOKING_REQUEST_DATA':
            return action.payload;
        default:
            return state;
    }
}
const userInitialState = {
    id:-1,
    token:localStorage.getItem('token')
    // rating:0
}

const client = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers:{
        'Content-Type': 'application/json',
        'Authorization':` ${localStorage.getItem('token')}`
    },
});
const userData=(state=userInitialState, action)=> {
    switch (action.type) {
        case 'UserDataUpdate':
            console.log(action.payload.token)
            if(action.payload.token){
                localStorage.setItem('token',action.payload.token)
            }
            return action.payload;


        default:
            return state;
    }
}
const rootReducer = combineReducers({
    authReducer,billBoardData,billBoardBookingData,userData
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = store => next => action => {
    console.log(`Action: ${action.type}`);
    return next(action);
};

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(loggerMiddleware)))

export {store};