import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: {
        address: "",
        pin: ""
    }
}

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        changeAddress: (state, action) => {
            state.address.address = action.payload.address;
            state.address.pin = action.payload.pin
        }
    }
})

const addressAction = addressSlice.actions.changeAddress
const addressReducer = addressSlice.reducer

export { addressAction, addressReducer }