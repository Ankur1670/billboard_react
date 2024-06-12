



const LoadingInitialState = {
    loading:false,
    billBoardDataLoading:true
}
const LoadingHandling=(state=LoadingInitialState, action)=> {
    switch (action.type) {
        case 'NOT_LOADING':
            return {
                ...state,
                loading:false
            };
        case 'LOADING':
            return {
                ...state,
                loading:true
            };
        case 'BILLBOARD_LOADING':
            return {
                ...state,
                billBoardDataLoading:action.payload
            };


        default:
            return state;
    }
}

export {LoadingHandling}