import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

type MainMarker = {
    lat : number,
    lng : number
}

interface initialStateType {
    loading : boolean;
    markers : MainMarker[];
    error : boolean;
}

export const getMarker = createAsyncThunk("get/marker",async()=>{

    const response = await axios.get('http://localhost:3001/marker');
    const {data} = response;
    console.log(data);
    return data;

});

export const getBookMarker = createAsyncThunk("get/bookmarker",async()=>{

    const response = await axios.get('http://localhost:3001/bookmarker');
    const {data} = response;
    console.log(data);
    return data;

});

const initialState : initialStateType = {
    loading : true,
    markers : [],
    error : false
};

const mainMarker = createSlice({
    name : "mainMarker",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getMarker.pending,(state)=>{
            state.loading = false;
        })
        .addCase(getMarker.fulfilled,(state,action)=>{
            state.markers = action.payload;
        })
        .addCase(getMarker.rejected,(state)=>{
            state.error = true;
        })
        .addCase(getBookMarker.pending,(state)=>{
            state.loading = false;
        })
        .addCase(getBookMarker.fulfilled,(state,action)=>{
            state.markers = action.payload;
        })
        .addCase(getBookMarker.rejected,(state)=>{
            state.error = true;
        })
    }
});

export default mainMarker.reducer;