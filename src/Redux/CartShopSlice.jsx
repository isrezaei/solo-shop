import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";


const CartShopAdapter = createEntityAdapter({
    sortComparer : (a, b) => b.id - a.id,
})

const initialState = CartShopAdapter.getInitialState({
    tradeOldDevice : {}
})

export const { selectById: selectCartShopById,  selectIds: selectCartShopIds , selectAll : selectAllCartShop} = CartShopAdapter.getSelectors(state => state.CartShopSlice)

const CartShopSlice = createSlice({
    name : 'CardShopSlice' ,
    initialState,
    reducers : {
        AddToCarts(state , {payload})
        {
            CartShopAdapter.addOne(state , payload)
        },
        UpdateDataCart(state , {payload})
        {

            const {id , color , capacity , image , product , price , priceWithOffer , offer} = payload

                CartShopAdapter.upsertOne(state , {
                    id,
                    color,
                    capacity,
                    image,
                    product ,
                    price ,
                    priceWithOffer ,
                    offer
                })
        },
        DeleteFromCarts(state , {payload})
        {
            CartShopAdapter.removeOne(state , payload)
        },
        DeleteAllCarts(state)
        {
            CartShopAdapter.removeAll(state)
        },
        SetTradeOldDevice(state , {payload})
        {
            state.tradeOldDevice = {
                ...state.tradeOldDevice,
                device : payload
            }
        }
    },
})

export default CartShopSlice.reducer
export const {AddToCarts , DeleteFromCarts , DeleteAllCarts , UpdateDataCart , SetTradeOldDevice} = CartShopSlice.actions

