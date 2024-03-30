import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface TourPlaceType {
    loading : boolean
    data : {
        placeDetails: PlaceDetail[];
        hasNext: boolean;
    }
    error : boolean
}

export interface PlaceDetail {
    placeId: number;
    name: string;
    addressDetail: string;
    placeImage: string;
    bookmarkStatus: boolean;
    placeStatus: string;
}

const initialState :TourPlaceType = {
    loading : true,
    data : {
        placeDetails: [],
        hasNext: false
    },
    error : false,
}

export const getTourPlace = 
createAsyncThunk(
    "get/tourPlace",
    async ({token,address,page} : {token : string,address:string,page:number}
) =>{

    const response = await axios.post(`/api/v1/place/search?page=${page}&size=10`,{address : "서울"},{
        headers : {
            Authorization : token,
            "Content-Type" : "application/json",
        }
    });

    const {data} = response;
    return data;

});

const tourPlace = createSlice({
    name : "tourPlace",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getTourPlace.pending,(state,action)=>{
            state.loading = false;
        })
        .addCase(getTourPlace.fulfilled,(state,action)=>{
            state.data = action.payload;
        })
        .addCase(getTourPlace.rejected,(state,action)=>{
            state.error = true;
        })
    },
});

export default tourPlace.reducer;