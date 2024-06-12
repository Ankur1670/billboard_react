



const errorHandlingInitialState = {
    errorLIst:[

    ]
}
const errorHandling=(state=errorHandlingInitialState, action)=> {
    switch (action.type) {
        case 'ERROR_APPEND':
            return {
            ...state,
            errorLIst: [...state.errorLIst, action.payload],
        };
        case 'ERROR_REMOVE':
            state.errorLIst.pop(action.index)
            return {
                ...state
            }

        case 'ERROR_CLEAR':
            return {
                ...state,
                errorLIst: [],
            };
        default:
            return state;
    }
}

export {errorHandling}