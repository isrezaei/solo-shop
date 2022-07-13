import {createSlice , createEntityAdapter} from "@reduxjs/toolkit";


const WishListAdapter = createEntityAdapter()

const initialState = WishListAdapter.getInitialState()

export const {selectById : selectWishListById , selectId} = WishListAdapter.getSelectors(state => state.WishListSlice)

const WishListSlice = createSlice({
    name : 'WishList',
    initialState,
    reducers : {

        addToWishList(state , payload)
        {
            WishListAdapter.addOne(state , payload)
        },
        removeToWishList(state , payload)
        {
            console.log(payload)

            WishListAdapter.removeOne(state , payload)
        },
        clearAllWishList(state)
        {
            WishListAdapter.removeAll(state)
        }
    },
})


export default WishListSlice.reducer
export const {addToWishList , removeToWishList , clearAllWishList} = WishListSlice.actions