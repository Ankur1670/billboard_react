import { createStore } from 'redux';
import { combineReducers } from "redux"
import { applyMiddleware, compose } from "redux";
import {authReducer} from "./redux_hooks/authReducer"
import {billBoardData} from "./redux_hooks/billBoardData"
import {billBoardBookingData} from "./redux_hooks/billBoardBookingData"
import {userData} from "./redux_hooks/userData"
import {errorHandling} from "./redux_hooks/errorHandeling"
import {LoadingHandling} from "./redux_hooks/loading"





const rootReducer = combineReducers({
    authReducer,billBoardData,billBoardBookingData,userData,errorHandling,LoadingHandling
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = store => next => action => {
    console.log(`Action: ${action.type}`);
    return next(action);
};

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(loggerMiddleware)))

export {store};