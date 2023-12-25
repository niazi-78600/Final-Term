import { createSlice } from "@reduxjs/toolkit";

const myslice = createSlice({
    name: "RocketInfo",
    initialState:[],
    reducers: {
        RocketsInfo:(state,action)=>{
            state.push(action.payload)
        },
    }
})

export default myslice.reducer