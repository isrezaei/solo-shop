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
    status : 'idle'
})


export const { selectById: selectMasterDataById,  selectIds: selectMasterDataIds,} = MasterDataAdapter.getSelectors(state => state.MasterDataSlice)


export const MasterDataSlice = createSlice({
    name : 'MasterData',
    initialState ,
    reducers : {
        AddQuantity(state , {payload}){

            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
        },

        IncreaseQuantity(state , {payload})
        {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
        },

        DecreaseQuantity(state , {payload}) {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
        },

        RemoveQuantity(state , {payload})
        {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
        }

    } ,
    extraReducers : {

        [FetchMasterData.pending] : (state) => {
            state.status = 'pending'
        },
        [FetchMasterData.fulfilled] : (state , {payload}) => {

            state.status = 'success'
            MasterDataAdapter.upsertMany(state , payload)
        } ,
        [FetchMasterData.rejected] : (state) => {
           state.status = 'reject'
        }
    }
})

export default MasterDataSlice.reducer
export const {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity} = MasterDataSlice.actions