import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {LiveSearch} from "../Serves/PromiseFunc";


export const FetchLiveSearchData = createAsyncThunk('FetchLiveSearchData' , async (product) => {

    return await LiveSearch(product)
})


export const LiveSearchSlice = createSlice({
    name : 'liveSearchSlice',
    initialState : {
        resultOfLiveSearch : {},
        status : 'idle'
    },
    reducers : {},
    extraReducers : {
        [FetchLiveSearchData.pending] : (state , payload) => {
            state.status = 'pending'
        },
        [FetchLiveSearchData.fulfilled] : (state , {payload}) => {
            state.status = 'success'
            state.resultOfLiveSearch = payload
        },
        [FetchLiveSearchData.rejected] : (state , payload) => {
            state.status = 'reject'
        }
    }
})

export default LiveSearchSlice.reducer