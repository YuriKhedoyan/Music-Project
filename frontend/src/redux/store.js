import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from 'redux-persist';

const persistConfig = {
  key: "users",
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, (state = {}) => state);

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);
