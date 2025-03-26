
import { configureStore } from '@reduxjs/toolkit'
import lodgeReducer from './lodgeSlice'
export const store = configureStore({
    reducer:{
        lodgeData : lodgeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;