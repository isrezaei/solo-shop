import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {PromiseFunc} from "../Serves/PromiseFunc";


export const FetchMasterData = createAsyncThunk (
    'MasterData/FetchMasterData',
    async () => (await PromiseFunc())
)



const MasterDataAdapter = createEntityAdapter({
    sortComparer : (a, b) => a.id - b.id
})


const initialState = MasterDataAdapter.getInitialState({
    totalQuantity : 0,
    totalPrice : 0,
    sortBy : 'newer',
    status : 'idle'
})


export const { selectById: selectMasterDataById,  selectIds: selectMasterDataIds , selectAll} = MasterDataAdapter.getSelectors(state => state.MasterDataSlice)

export const SortBySelect = createSelector (

    [ selectAll , (state , items) => items] ,

    (AllProduct, SelectFilter) => {

        return [...AllProduct].sort((a, b) => {

            if (SelectFilter === 'cheapest')
            {
              return  a.price - b.price
            }

            if (SelectFilter === 'expensive')
            {
                return  b.price - a.price
            }

            return  a[SelectFilter] - b[SelectFilter]
        })
    } )



export const MasterDataSlice = createSlice({
    name : 'MasterData',
    initialState ,
    reducers : {
        AddQuantity(state , {payload}){

            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
            state.totalQuantity += 1
            state.totalPrice += payload.price
        },

        IncreaseQuantity(state , {payload})
        {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
            state.totalQuantity += 1
            state.totalPrice += payload.price
        },

        DecreaseQuantity(state , {payload}) {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })

            state.totalQuantity -= 1
            state.totalPrice -= payload.price
        },

        RemoveQuantity(state , {payload})
        {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })

            state.totalQuantity -= 1
            state.totalPrice -= payload.price
        },
        SortEntities(state , {payload})
        {
            state.sortBy = payload
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
export const {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity , SortEntities} = MasterDataSlice.actions


