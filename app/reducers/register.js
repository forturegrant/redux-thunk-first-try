const initialState = {
     loading : false
}

export function register(text){
    return {
        type: 'register'
    }
}



export function registerR (state = initialState, action) {
    switch (action.type){
        case "register":
            return {
                loading:true
            }
            break;
        default:
            return state
    }
}
