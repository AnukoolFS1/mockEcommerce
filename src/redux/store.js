import { configureStore } from "@reduxjs/toolkit";
import { layoutReducer } from "./layoutSlice";
import { productReducer } from "./ProductSlice";
import { paymentReducer } from "./paymentSlice";
import { addressReducer } from "./AddressSlice";

const store = configureStore({
    reducer:{
        layout: layoutReducer,
        product: productReducer,
        paymentMode: paymentReducer,
        address:addressReducer
    }
})

export default store
