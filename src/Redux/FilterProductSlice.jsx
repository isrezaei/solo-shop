import {createReducer , createAction} from "@reduxjs/toolkit";

const initialState = {
    select : 'newer'
}

export const FilterProductSlice = createReducer(initialState , (builder)=> {
    builder
        .addCase('FilterProduct' , (state , {payload}) => {

            state.select = payload;

        })})


export const FilterProduct = createAction('FilterProduct');