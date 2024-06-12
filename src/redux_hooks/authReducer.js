
const billBoardListInitialState = {
    data: [],
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
        case 'DATA_REMOVE':

            return {...state,
                data:state.data.filter((obj)=>obj.id!==action.payload.id)};
        case 'DATA_UPDATE_is_added_in_cart':
            let id=state.data.findIndex((obj)=>obj.id===action.payload.id)
            state.data[id]=action.payload
            return {
                ...state,
                data:state.data
            };
        default:
            return state;
    }
}
export {authReducer}