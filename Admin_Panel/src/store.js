import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./services/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  } 

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)));
export const  persistor = persistStore(store);