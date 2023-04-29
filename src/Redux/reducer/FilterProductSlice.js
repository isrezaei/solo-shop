import {createReducer , createAction} from "@reduxjs/toolkit";

const initialState = {
    price : '',
    product : '',
    stars : '',
    isOpenF : false
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
            .addCase("isOpenFilter" , (state , {payload}) =>{
                state.isOpen = payload
            })
    }
)



export const filterByPrice = createAction('filterByPrice');
export const filterByProduct = createAction('filterByProduct');
export const filterByStars = createAction('filterByStars');
export const isOpenFilter = createAction('isOpenFilter');