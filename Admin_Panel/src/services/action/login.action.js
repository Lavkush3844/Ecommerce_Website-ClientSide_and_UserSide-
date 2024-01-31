import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { authUser } from "../../FirebaseConfig"
import { USERLOGINREJ, USERLOGINREQ, USERLOGINRES, USERLOGOUTREJ, USERLOGOUTREQ, USERLOGOUTRES } from "../const"

const userLoginReq = () => {
    return {
        type: USERLOGINREQ
    }
}

const userLoginRes = () => {
    return {
        type: USERLOGINRES
    }
}

const userLoginRej = (error) => {
    return {
        type: USERLOGINREJ,
        payload: error
    }
}

export const userLogin = (email, password) => {
    return async dispatch => {
        dispatch(userLoginReq());
        await signInWithEmailAndPassword(authUser, email, password).then((userCredential) => {
            // console.log('userCredential>>>>', userCredential);
            dispatch(userLoginRes());

        }).catch((err) => {

            let error = null;
            const errorCode = err.code;
            const errorMessage = err.message;
            // console.log('err',errorCode);

            if ('auth/invalid-credential' == errorCode) {
                error = "User Does Not Exists"
            }
            dispatch(userLoginRej(error));
        })
    }
}

const userLogoutReq = () => {
    return {
        type: USERLOGOUTREQ
    }
}
const userLogoutRes = () => {
    return {
        type: USERLOGOUTRES
    }
}
const userLogoutRej = () => {
    return {
        type: USERLOGOUTREJ
    }
}

export const userLogout = () => {
    return async dispatch => {
        dispatch(userLogoutReq());
        await signOut(authUser).then((res) => {
            dispatch(userLogoutRes());
        }).catch((err) => {
            console.log("err", err);
            dispatch(userLogoutRej());
        })
    }
}