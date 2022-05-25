import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";



const CartShopAdapter = createEntityAdapter({
    sortComparer : (a, b) => b.id - a.id
})

const initialState = CartShopAdapter.getInitialState()

export const { selectById: selectCartShopById,  selectIds: selectCartShopIds , selectAll : selectAllCartShop} = CartShopAdapter.getSelectors(state => state.CartShopSlice)

const CartShopSlice = createSlice({
    name : 'CardShopSlice' ,
    initialState,
    reducers : {
        AddToCard(state , {payload})
        {
            CartShopAdapter.addOne(state , payload)
        },
        DeleteFromCard(state , {payload})
        {
            CartShopAdapter.removeOne(state , payload)
        },
    },
})

export default CartShopSlice.reducer
export const {AddToCard , DeleteFromCard} = CartShopSlice.actions

