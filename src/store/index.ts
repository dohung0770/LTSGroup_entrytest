import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import todosReducer from './slices/todo'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  todos: todosReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  devTools: !import.meta.env.PROD
})

const persistor = persistStore(store)

store.subscribe(() => {

})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export { persistor, store }
