import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = true;

const tourOpen = createSlice({
    name : "tourOpen",
    initialState,
    reducers : {
        change : (_,actions:PayloadAction<boolean>)=>{
            return actions.payload;
        }
    }
});

export const {change} = tourOpen.actions;

export default tourOpen.reducer;