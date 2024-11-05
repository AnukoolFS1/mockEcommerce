import { configureStore } from "@reduxjs/toolkit";
import { layoutReducer } from "./layoutSlice";
import { productReducer } from "./ProductSlice";
import { paymentReducer } from "./paymentSlice";

const store = configureStore({
    reducer:{
        layout: layoutReducer,
        product: productReducer,
        paymentMode: paymentReducer
    }
})

export default store
