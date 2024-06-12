const billBoardInitialState = {
    id:-1,
    // rating:0
}




const billBoardData=(state=billBoardInitialState, action)=> {
    switch (action.type) {
        case 'BILLBOARD_DATA_ADD':
            return action.payload;
        default:
            return state;
    }
}

export {billBoardData}