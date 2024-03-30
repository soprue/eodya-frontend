import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = 100;

const spotInfoY = createSlice({
    name : "spotInfoY",
    initialState,
    reducers : {
        change : (_,actions:PayloadAction<number>)=>{
            return actions.payload;
        }
    }
});

export const {change} = spotInfoY.actions;

export default spotInfoY.reducer;