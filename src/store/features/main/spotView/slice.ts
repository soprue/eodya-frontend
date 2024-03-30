import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const spotViewSlice = createSlice({
    name : "spot_view",
    initialState,
    reducers : {
        open : ()=>{
            return true;
        },
        close : ()=>{
            return false;
        }
    }
});

export const { open, close } = spotViewSlice.actions;

export default spotViewSlice.reducer;