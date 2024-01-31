import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FirebaseConfig";
import { ADMINREJ, ADMINREQ, ADMINSUC, DELETEDATAREJ, DELETEDATAREQ, DELETEDATARES, GETDATAREJ, GETDATAREQ, GETDATARES, SINGLEDATAREJ, SINGLEDATAREQ, SINGLEDATARES, UPDATEDATAREJ, UPDATEDATAREQ, UPDATEDATARES } from "../const";


export const getDataReq = () => {
  return {
    type: GETDATAREQ
  }
}
export const getDataRes = (data) => {
  return {
    type: GETDATARES,
    payload: data
  }
}
export const getDataRej = (err) => {
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


export const adminReq = () => {
  return {
    type: ADMINREQ
  }
}
export const adminSuc = (data) => {
  return {
    type: ADMINSUC,
    payload: data
  }
}
export const adminRej = () => {
  return {
    type: ADMINREJ
  }
}

export const adminData = (data) => {
  return dispatch => {
    dispatch(adminReq());
    addDoc(collection(db, "products"), data).then((res) => {
      dispatch(getData());
    }).catch((err) => {
      dispatch(adminRej(err))
    })
  };
};


export const singleDataReq = () => {
  return {
    type: SINGLEDATAREQ
  }

}

export const singleDataRes = (data) => {
  return {
    type: SINGLEDATARES,
    payload: data
  }
}

export const singleDataRej = () => {
  return {
    type: SINGLEDATAREJ
  }
}

export const singleData = (id) => {
  return async dispatch => {
    dispatch(singleDataReq());

    const docRef = doc(db, "products", `${id}`);
    // console.log("docRef",docRef);
    await getDoc(docRef)
      .then((single) => {
        if (single.exists()) {
          const singleD = { id: single.id, ...single.data() };
          dispatch(singleDataRes(singleD));
        } else {
          dispatch(singleDataRej("Document not found"));
        }
      })
      .catch((error) => {
        console.error('Fetch Single Record Error:', error);
        dispatch(singleDataReq(error.message));
      });
  };
};

const updateDataReq = () => {
  return {
    type: UPDATEDATAREQ
  }
}

const updateDataRes = (id, data) => {
  return {
    type: UPDATEDATARES,
    payload: data
  }
}

const updateDataRej = () => {
  return {
    type: UPDATEDATAREJ
  }
}
export const updateData = (id, data) => {
  return async dispatch => {
    dispatch(updateDataReq());

    const updatedocc = doc(db, "products", id)

    await updateDoc(updatedocc, data).then(() => {
      dispatch(getData());
    })
      .catch((err) => {
        // console.log("uperr",error);
        dispatch(updateDataRej(err))
      })
  }
}

const deleteDataReq = () => {
  return {
    type: DELETEDATAREQ
  }
}

const deleteDataRes = (id) => {
  return {
    type: DELETEDATARES,
    payload: id
  }
}
const deleteDataRej = () => {
  return {
    type: DELETEDATAREJ
  }
}

export const deleteData = (id) => {
  return (dispatch) => {
    dispatch(deleteDataReq());

    const docdel = doc(db, "products", id);

    deleteDoc(docdel).then(() => {
      dispatch(deleteDataRes(id));
      dispatch(getData());
    }).catch((err) => {
      // console.log("deleting",error);
      dispatch(deleteDataRej(err));
    })
  }
}


