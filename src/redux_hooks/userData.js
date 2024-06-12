
const userInitialState = {
    id:-1,
    token:localStorage.getItem('token')
    // rating:0
}


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

export {userData}