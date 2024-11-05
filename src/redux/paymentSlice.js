import { createSlice } from "@reduxjs/toolkit";

const initialState = { paymentMode: "Cash On Delivery" }

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        updatePayment: (state, action) => {
            state.paymentMode = action.payload
        }
    }
})

const paymentAction = paymentSlice.actions.updatePayment
const paymentReducer = paymentSlice.reducer

export { paymentAction, paymentReducer }