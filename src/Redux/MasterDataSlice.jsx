import {createSlice, createAsyncThunk, createEntityAdapter, createSelector} from "@reduxjs/toolkit";
import {PromiseFunc} from "../Serves/PromiseFunc";


export const FetchMasterData = createAsyncThunk (
    'MasterData/FetchMasterData',
    async () => (await PromiseFunc())
)

const MasterDataAdapter = createEntityAdapter({
    sortComparer : (a, b) => a.id - b.id
})

const initialState = JSON.parse(localStorage.getItem('masterData')) || MasterDataAdapter.getInitialState({
    totalQuantity : 0,
    totalPrice : 0,
    sortBy : 'newer',
    status : 'idle'
})

export const { selectById: selectMasterDataById,  selectIds: selectMasterDataIds , selectAll : selectAllMasterData , selectEntities : selectMasterEntities} = MasterDataAdapter.getSelectors(state => state.MasterDataSlice)



export const SortBySelect = createSelector (

    [selectAllMasterData , (state , items) => items] ,

    (AllProduct, SelectFilter) => {
        return [...AllProduct].sort((a, b) => {

            if (SelectFilter === 'cheapest')
            {
                return  a.price - b.price
            }
            if (SelectFilter === 'expensive'){
                return  b.price - a.price
            }
            return  a[SelectFilter] - b[SelectFilter]
        })
    } )

export const SortByFilter = createSelector (
    [selectAllMasterData , (state , items) => items],

    (AllProduct , FilterItem)=> {

        const {price : choicePrice , product : choiceProduct , stars : choiceStars} = FilterItem

        let storage = [...AllProduct]

        if (choiceProduct)
        {
            storage = storage.filter(items => items.type === choiceProduct)
        }

        if (choiceStars)
        {
            storage = storage.filter(items => items.rate <= choiceStars)
        }

        if (choicePrice)
        {
            const {startPoint , endPoint} = choicePrice
            storage = storage.filter(items => items.price < endPoint && items.price > startPoint)
        }

        return storage.sort((a , b) => b.offer - a.offer)
    }
)


export const MasterDataSlice = createSlice({
    name : 'MasterData',
    initialState ,
    reducers : {
        AddQuantity(state , {payload}){
            console.log(payload)
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
            state.totalQuantity += 1
            state.totalPrice += payload.discountedPrice
            localStorage.setItem('masterData' , JSON.stringify(state))
        },
        IncreaseQuantity(state , {payload})
        {
            console.log(payload)

            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })
            state.totalQuantity += 1
            state.totalPrice += payload.discountedPrice
            localStorage.setItem('masterData' , JSON.stringify(state))
        },
        DecreaseQuantity(state , {payload}) {
            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : payload.quantity
            })

            state.totalQuantity -= 1
            state.totalPrice -= payload.discountedPrice
            localStorage.setItem('masterData' , JSON.stringify(state))
        },

        RemoveQuantity(state , {payload})
        {

            MasterDataAdapter.upsertOne(state , {
                id : payload.id,
                quantity : null
            })
            state.totalQuantity -= payload.quantity
            state.totalPrice -= payload.discountedPrice
            localStorage.setItem('masterData' , JSON.stringify(state))
        },
        ResetAndClearAllTotal(state)
        {
            MasterDataAdapter.setAll(state , [])
            state.status = 'idle'
            state.totalQuantity = 0
            state.totalPrice = 0
            localStorage.setItem('masterData' , JSON.stringify(state))
        },
        SortEntities(state , {payload})
        {
            state.sortBy = payload
            localStorage.setItem('masterData' , JSON.stringify(state))
        }
    } ,
    extraReducers : {
        [FetchMasterData.pending] : (state) => {
            state.status = 'pending'
            localStorage.setItem('masterData' , JSON.stringify(state))
        },
        [FetchMasterData.fulfilled] : (state , {payload}) => {
            state.status = 'success'
            MasterDataAdapter.upsertMany(state , payload)
            localStorage.setItem('masterData' , JSON.stringify(state))
        } ,
        [FetchMasterData.rejected] : (state) => {
            state.status = 'reject'
            localStorage.setItem('masterData' , JSON.stringify(state))
        }
    }
})



export default MasterDataSlice.reducer
export const {AddQuantity , IncreaseQuantity , DecreaseQuantity , RemoveQuantity , ResetAndClearAllTotal , SortEntities} = MasterDataSlice.actions


