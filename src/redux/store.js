import { configureStore } from "@reduxjs/toolkit";
import { layoutReducer } from "./layoutSlice";
import { productReducer } from "./ProductSlice";

const store = configureStore({
    reducer:{
        layout: layoutReducer,
        product: productReducer
    }
})

export default store
