import {configureStore} from "@reduxjs/toolkit";
import MasterDataSlice from "../reducer/MasterDataSlice";
import CartShopSlice from "../reducer/CartShopSlice";
import LiveSearchSlice from "../reducer/LiveSearchSlice";
import {FilterProductSlice} from "../reducer/FilterProductSlice";
import {SelectProductSlice} from "../reducer/SelectProductSlice";


export const store = configureStore({
    reducer : {
        MasterDataSlice,
        CartShopSlice,
        LiveSearchSlice,
        FilterProductSlice,
        SelectProductSlice,
    }
})