import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface TourPlaceType {
    loading : boolean
    data : {
        placeDetails: PlaceDetail[];
        hasNext: boolean;
    }
    error : null | string
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
    error : null,
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
        .addCase(getTourPlace.pending,(state)=>{
            state.loading = false;
        })
        .addCase(getTourPlace.fulfilled,(state,action)=>{
            state.data.placeDetails = [...state.data.placeDetails,...action.payload.placeDetails];
            state.data.hasNext = action.payload.hasNext;
        })
        .addCase(getTourPlace.rejected,(state)=>{
            state.error = "error01";
        })
    },
});

export default tourPlace.reducer;