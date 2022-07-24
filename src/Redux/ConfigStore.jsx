import {configureStore} from "@reduxjs/toolkit";
import MasterDataSlice from "./MasterDataSlice";
import CartShopSlice from "./CartShopSlice";
import WishListSlice from "./WishListSlice";
import {FilterProductSlice} from "./FilterProductSlice";
import {SelectProductSlice} from "./SelectProductSlice";
import LiveSearchSlice from "./LiveSearchSlice";



export const store = configureStore({
    reducer : {
        MasterDataSlice,
        CartShopSlice,
        WishListSlice,
        LiveSearchSlice,
        FilterProductSlice,
        SelectProductSlice,
    }
})