import React from "react";
import ReactDom from "react-dom";
import App from './App';
import './index.css';
import {store} from "./redux_hook";
import {Provider, useDispatch} from "react-redux"

const Main = () => {
  return(
      <>
          <Provider store={store}>
              <App /></Provider>
      </>
  );
}
ReactDom.render(<Main/>, document.getElementById('root'));
