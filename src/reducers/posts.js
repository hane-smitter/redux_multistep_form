const reducer = (state = { condition: 'New' }, action) => {
    switch(action.type) {
        case 'SET_PREVIEW': 
            return {
                ...state,
                imgData: action.payload
            };
        case 'SET_DESC': 
            return {
                ...state,
                description: action.payload
            };
        case 'SET_COND': 
            return {
                ...state,
                condition: action.payload
            };
        case 'SET_BRAND': 
            return {
                ...state,
                brand: action.payload
            };
        case 'SET_FILE': 
            return {
                ...state,
                imgFile: action.payload
            };
        default:
            return state;
    }
}

export default reducer;