import { createSlice } from "@reduxjs/toolkit";

let initialState = {state:true}

const layoutSlice = createSlice({
    name:"layout",
    initialState,
    reducers:{
        toggle: (state) => {
            state.state = !state.state
        }
    }
})

const layoutReducer = layoutSlice.reducer
const layoutAction = layoutSlice.actions.toggle

export {layoutReducer, layoutAction}