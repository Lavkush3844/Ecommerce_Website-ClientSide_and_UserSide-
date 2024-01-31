import { ADDITEM, DELITEM, INC } from "../const";

const initialState = {
    isCart: [],
    quantity: 0 
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDITEM:
            return {
                ...state,
                isCart: [...state.isCart, action.payload]
            };

        case DELITEM:
            return {
                ...state,
                isCart: state.isCart.filter((item) => item.id !== action.payload.id),
            };

        case INC:
            const item = state.isCart.find((item) => item.id === action.payload.id);
            item.quantity++;
            return { ...state };


        default:
            return state;
    }
};

export default cartReducer;
