import {createSlice , createEntityAdapter} from "@reduxjs/toolkit";



const CartShopAdapter = createEntityAdapter()

const initialState = CartShopAdapter.getInitialState()

export const { selectById: selectCartShopById,  selectIds: selectCartShopIds , selectAll : selectAllCartShop} = CartShopAdapter.getSelectors(state => state.CartShopSlice)

const CartShopSlice = createSlice({
    name : 'CardShopSlice' ,
    initialState,
    reducers : {
        AddToCard(state , {payload})
        {
            console.log(payload)

            CartShopAdapter.addOne(state , payload)
        },
        DeleteToCard(state , {payload})
        {
            CartShopAdapter.removeOne(state , payload)
        },

    }
})

export default CartShopSlice.reducer
export const {AddToCard , DeleteToCard} = CartShopSlice.actions