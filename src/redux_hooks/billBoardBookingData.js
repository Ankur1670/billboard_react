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

export {billBoardBookingData}