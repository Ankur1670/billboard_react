const HandelError=(error)=>{
    if(error.response.status===400){
        alert(error?.response?.data?.error)
        console.log(error.response)
    }
    else{

    }

}
export default HandelError