
import { configureStore } from '@reduxjs/toolkit'
import lodgeReducer from './lodgeSlice'
import userReducer from './userSlice'

export const store = configureStore({
    reducer:{
        lodgeData : lodgeReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;