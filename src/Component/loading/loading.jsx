import Spinner from "react-bootstrap/Spinner";
import React from "react";


const Button = ( {state, callback, value, className}) => {
    console.log(state)
  return(
      <button className={className} onClick={callback}>
          { state?( <Spinner animation="border" variant="secondary" />): value}
      </button>
  )
}

const Loading = (obj) => {
  return <Spinner style={{width:"4rem",height:"4rem"}}  animation="border" size={'xl'} variant="secondary" >
  </Spinner>
}

export {Button,Loading}