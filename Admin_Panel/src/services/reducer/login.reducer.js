import { USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES } from "../const"

const initialState = {
    isLoading: false,
    isLogin: false,
    isLogout: false,
    err: null
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case USERLOGINREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGINRES:
            return {
                ...state,
                isLoading: false,
                isLogin: true
            }


        case USERLOGINREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload
            }

        case USERLOGOUTREQ:
            return {
                ...state,
                isLoading: true
            }

        case USERLOGOUTRES:
            return {
                ...state,
                isLoading: false,
                isLogout: true,
                isLogin: false,
            }

        case USERLOGOUTREJ:
            return {
                ...state,
                isLoading: false
            }


        default: return state;
    }

} 
