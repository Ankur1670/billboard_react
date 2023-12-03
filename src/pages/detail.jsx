import React from 'react'
import {Navbar, Imagesection ,Services ,Coustomer,Footer,Imgsec ,PriceSection,Det} from '../Component';
import { useParams } from 'react-router-dom';

function Detail() {
    let { id}=useParams();
    console.log(id)
    return (
      <div className="App">
        <Navbar />
        <Det />
      </div>
    );
  }
  
  export default Detail;