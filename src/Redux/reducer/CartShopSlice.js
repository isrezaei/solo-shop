import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const CartShopAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.id - a.id,
})

const initialState = JSON.parse(localStorage.getItem('shopListProduct')) || CartShopAdapter.getInitialState()

export const {
    selectById: selectCartShopById,
    selectIds: selectCartShopIds,
    selectAll: selectAllCartShop
} = CartShopAdapter.getSelectors(state => state.CartShopSlice)

const CartShopSlice = createSlice({
    name: 'CardShopSlice',
    initialState,
    reducers: {
        AddToCarts(state, {payload}) {
            CartShopAdapter.addOne(state, payload)
            localStorage.setItem('shopListProduct', JSON.stringify(state))
        },
        UpdateDataCart(state, {payload}) {
            const {
                id,
                activeColor,
                activeCapacity,
                activeImage,
                product,
                price,
                discount,
                offer
            } = payload

            CartShopAdapter.upsertOne(state, {
                id,
                activeColor,
                activeCapacity,
                activeImage,
                product,
                price,
                discount,
                offer
            })
            localStorage.setItem('shopListProduct', JSON.stringify(state))
        },
        DeleteFromCarts(state, {payload}) {
            CartShopAdapter.removeOne(state, payload)
            localStorage.setItem('shopListProduct', JSON.stringify(state))
        },
        DeleteAllCarts(state) {
            CartShopAdapter.removeAll(state)
            localStorage.setItem('shopListProduct', JSON.stringify(state))
        },
    },
})

export default CartShopSlice.reducer
export const {AddToCarts, DeleteFromCarts, DeleteAllCarts, UpdateDataCart} = CartShopSlice.actions

