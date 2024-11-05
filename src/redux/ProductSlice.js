import { createSlice } from "@reduxjs/toolkit";

const initialState = {product:{}}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        updateProduct:(state, action) => {
            state.product = action.payload
        }
    }
})

const productAction = productSlice.actions.updateProduct
const productReducer = productSlice.reducer

export {productAction, productReducer}