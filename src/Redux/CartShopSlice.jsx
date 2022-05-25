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
        AddToCarts(state , {payload})
        {
            CartShopAdapter.addOne(state , payload)
        },
        DeleteFromCarts(state , {payload})
        {
            CartShopAdapter.removeOne(state , payload)
        },
        DeleteAllCarts(state , {payload})
        {
            CartShopAdapter.removeAll(state)
        }
    },
})

export default CartShopSlice.reducer
export const {AddToCarts , DeleteFromCarts , DeleteAllCarts} = CartShopSlice.actions

