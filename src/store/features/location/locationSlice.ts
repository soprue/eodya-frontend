import { createSlice } from "@reduxjs/toolkit";
import { LocationSuccess } from "../../../types/LocationProps";

const initialState : LocationSuccess = {
    latitude : 0,
    longitude : 0,
}

export const locationSlice = createSlice({
    name : "location",
    initialState,
    reducers : {
        
    }
});