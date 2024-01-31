import { GETDATAREJ, GETDATAREQ, GETDATARES } from "../const";

const initialState = {
    products: [],
    product: null,
    isLoading: false,
    err: null
}
export const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GETDATAREQ:
            return {
                ...state,
                isLoading: true,
                err: null,
            };

        case GETDATARES:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                err: null,
            };

        case GETDATAREJ:
            return {
                ...state,
                isLoading: false,
                err: action.payload,
            };


        default: return state;
    }
}
