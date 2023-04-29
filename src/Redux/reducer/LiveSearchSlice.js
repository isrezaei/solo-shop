import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {LiveSearch} from "../../Serves/PromiseFunc";

export const FetchLiveSearchData = createAsyncThunk('FetchLiveSearchData' , async (product) => {

    return await LiveSearch(product)
})

export const LiveSearchSlice = createSlice({
    name : 'liveSearchSlice',
    initialState : {
        status : 'idle',
        resultOfLiveSearch : {},
    },
    reducers : {
        emptyResultOfLiveSearch(state)
        {
            state.status = 'idle'
            state.resultOfLiveSearch = {}
        }
    },
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
export const {emptyResultOfLiveSearch} = LiveSearchSlice.actions