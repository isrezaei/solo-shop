import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {PromiseFunc} from "../Serves/PromiseFunc";


export const FetchMasterData = createAsyncThunk (
    'MasterData/FetchMasterData',
    async () => (await PromiseFunc())
)


const MasterDataAdapter = createEntityAdapter({
    sortComparer : (a, b) => a.id - b.id
})


const initialState = MasterDataAdapter.getInitialState({
    stats : 'idle'
})


export const { selectById: selectMasterDataById,  selectIds: selectMasterDataIds,} = MasterDataAdapter.getSelectors(state => state.MasterDataSlice)


export const MasterDataSlice = createSlice({
    name : 'MasterData',
    initialState ,
    reducers : {} ,
    extraReducers : {

        [FetchMasterData.pending] : (state) => {
            state.status = 'pending'
        },
        [FetchMasterData.fulfilled] : (state , {payload}) => {

            state.status = 'success'
            MasterDataAdapter.upsertMany(state , payload)
        } ,
        [FetchMasterData.rejected] : (state , action) => {
           state.status = 'reject'
        }
    }
})

export default MasterDataSlice.reducer