import {configureStore} from "@reduxjs/toolkit";
import MasterDataSlice from "./MasterDataSlice";


export const store = configureStore({
    reducer : {
        MasterDataSlice
    }
})