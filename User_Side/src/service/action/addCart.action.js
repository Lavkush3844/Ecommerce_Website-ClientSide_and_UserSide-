import { ADDITEM, DELITEM, DSC, INC } from "../const"

export const addItem = (data) => {
    return {
        type : ADDITEM,
        payload : data
    }
}

export const increement = (data) => {
    return {
        type : INC,
        payload : data
    }
}

export const dcreement = (data) => {
    return {
        type : DSC,
        payload : data
    }
}


export const delItem = (data) => {
    return {
        type : DELITEM,
        payload : data
    }
}