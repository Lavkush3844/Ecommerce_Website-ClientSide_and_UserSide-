import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./service/reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);