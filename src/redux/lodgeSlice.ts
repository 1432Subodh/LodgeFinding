import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    lodges : [],
    lodgeDetails:[],
    populaLodgerNearby:[],
    loading: true, 
    error: null
}

export const fetchLodge = createAsyncThunk('lodgeAPI', async(_, { getState })=>{
    const state:any = getState(); // Access the Redux store state
const res = await axios.get('/api/lodge/get');
    return res.data
})

export const fetchSearchLodge = createAsyncThunk('SearchAPI', async (search:any)=>{
    const res = await axios.post('/api/lodge/search', {search})
    console.log(res)
    return res.data
})

export const fetchLodgeDetails = createAsyncThunk('lodgeDetailsAPI', async(id:any)=>{
    const res = await axios.post('/api/lodge/get', {id})
    // // console.log(res)
    return res.data
})

export const fetchPopularLodgeNearby = createAsyncThunk('populaLodgerNearby', async({id, location}:any)=>{
    const res = await axios.post('/api/lodge/popular', {id:id, location:location})
    // console.log(location, id)
    // // console.log(res)
    return res.data
})

const lodgeSlice = createSlice({
    name:"lodge",
    initialState,
    reducers:{
        removeLodgeDetails: (state)=>{
            state.lodgeDetails =[];
            // console.log('hit remove lodge Details')
        }

    },
    extraReducers(builder) {
        builder.addCase(fetchLodge.pending, (state)=>{
            state.loading = true;
        }).addCase(fetchLodge.fulfilled, (state:any, action)=>{
            state.lodges = action.payload.lodges;
            // console.log(state.lodges)
            state.loading = false;
        }).addCase(fetchLodge.rejected, (state:any, action)=>{
            state.lodges = action.payload;
            state.loading = false;
        })
        .addCase(fetchLodgeDetails.pending,(state:any, action)=>{
            state.loading= true;
        }).addCase(fetchLodgeDetails.fulfilled,(state:any, action)=>{
            if(action.payload.error){
                state.error = true
            }
            state.lodgeDetails = action.payload;
            
            // console.log(state.lodgeDetails)
            state.loading= false;
        }).addCase(fetchLodgeDetails.rejected,(state:any, action)=>{
            state.lodgeDetails = action.payload;
            state.loading= false;
        })
        .addCase(fetchPopularLodgeNearby.pending,(state:any, action)=>{
            state.loading= true;
        }).addCase(fetchPopularLodgeNearby.fulfilled,(state:any, action)=>{
            state.populaLodgerNearby = action.payload;
            // console.log(state.populaLodgerNearby)
            state.loading= false;
        }).addCase(fetchPopularLodgeNearby.rejected,(state:any, action)=>{
            state.populaLodgerNearby = action.payload;
            state.loading= false;
        })
        //serach lodge
        .addCase(fetchSearchLodge.pending,(state:any, action)=>{
            state.loading= true;
        }).addCase(fetchSearchLodge.fulfilled,(state:any, action)=>{
            state.lodges = action.payload.results;
            // console.log(state.lodges)
            state.loading= false;
        }).addCase(fetchSearchLodge.rejected,(state:any, action)=>{
            state.lodges = action.payload;
            state.loading= false;
        })
    },
})

export const {removeLodgeDetails}=  lodgeSlice.actions

export default lodgeSlice.reducer