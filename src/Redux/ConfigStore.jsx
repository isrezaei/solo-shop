import {configureStore} from "@reduxjs/toolkit";
import MasterDataSlice from "./MasterDataSlice";
import {FilterProductSlice} from "./FilterProductSlice";


export const store = configureStore({
    reducer : {
        MasterDataSlice,
        FilterProductSlice
    }
})