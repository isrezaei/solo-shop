import {createReducer , createAction} from "@reduxjs/toolkit";

const initialState = {
    price : '',
    product : '',
    stars : ''

}

export const FilterProductSlice = createReducer(initialState , (builder)=> {
        builder
            .addCase('filterByPrice' , (state , {payload})=> {
                state.price = payload
            })
            .addCase('filterByProduct' , (state , {payload})=> {
                state.product = payload
            })
            .addCase('filterByStars' , (state , {payload})=> {
                state.stars = payload
            })
    }
)



export const filterByPrice = createAction('filterByPrice');
export const filterByProduct = createAction('filterByProduct');
export const filterByStars = createAction('filterByStars');