import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/users/usersSlice.js";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';

const persistConfig = {
  key: "usersss",
  version: 1,
  storage
}

const reducer = combineReducers({
  users: usersReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);