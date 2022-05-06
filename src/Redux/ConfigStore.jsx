import {configureStore} from "@reduxjs/toolkit";
import MasterDataSlice from "./MasterDataSlice";
import {FilterProductSlice} from "./FilterProductSlice";
import {SelectProductSlice} from "./SelectProductSlice";


export const store = configureStore({
    reducer : {
        MasterDataSlice,
        FilterProductSlice,
        SelectProductSlice
    }
})