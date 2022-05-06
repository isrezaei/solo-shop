import {createAction , createReducer} from "@reduxjs/toolkit";


const initialState = {
    selectProduct: 'iphone'
}

export const SelectProductSlice = createReducer(initialState , (builder)=>{

    builder
        .addCase('SelectProduct' , (state , {payload}) => {
            state.selectProduct = payload
        })
})

export const SelectProduct = createAction('SelectProduct')