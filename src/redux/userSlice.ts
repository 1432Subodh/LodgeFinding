import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from 'js-cookie';



const initialState = {
    user: [],
    loading: true,
    error: null
}

export const fetchUser = createAsyncThunk('userAPI', async () => {
    const token = Cookies.get('token')
    // // console.log(cookieToken)

    const res = await axios.post('/api/user/auth/extractcookies', { token })
    // // console.log(res)
    return res.data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state: any, action:any) => {
            state.loading = true
        }).addCase(fetchUser.fulfilled, (state: any, action:any) => {
            state.loading = false
            if(action.payload.error){
                state.error = {
                    message: action.payload.error
                }
                // console.log('error')
                state.loading = false
                // // console.log(state.error)
            }
            else{

                state.user = action.payload.user
                // // console.log(state.user)
            }
        }).addCase(fetchUser.rejected, (state: any, action:any) => {
            state.loading = false
            state.user = action.payload
        })
    },
})

export default userSlice.reducer