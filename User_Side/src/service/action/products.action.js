import { GETDATAREJ, GETDATAREQ, GETDATARES } from "../const"
import {db} from '../../firebaseConfig'
import { collection, getDocs } from "firebase/firestore";
const getDataReq = () => {
    return {
        type: GETDATAREQ
    }
}
const getDataRes = (data) => {
    return {
        type: GETDATARES,
        payload: data
    }
}
const getDataRej = (err) => {
    return {
        type: GETDATAREJ,
        payload: err
    }
}

export const getData = () => {
    return async dispatch => {
        dispatch(getDataReq());
        await getDocs(collection(db, "products"))
            .then((pro) => {
                let arr = [];
                pro.forEach((doc) => {
                    arr = [...arr, { id: doc.id, ...doc.data() }];
                });
                // console.log('arr',arr);
                dispatch(getDataRes(arr));
            })
            .catch((err) => {
                dispatch(getDataRej(err));
            });
    };
};
