import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface TourPlaceType {
    loading : boolean
    data : {
        reviewTotalCount: number;
        reviewDetailList: ReviewDetailList[];
        hasNext: boolean;
    }
    error : boolean
}

export interface ReviewDetailList {
    userId: number;
    nickName: string;
    reviewDate: string;
    reviewImage: string[];
    placeStatus: string;
    reviewContent: string;
}

const initialState :TourPlaceType = {
    loading : true,
    data : {
        reviewTotalCount: 0,
        reviewDetailList: [],
        hasNext: false
    },
    error : false,
}

export const getTourPlace = 
createAsyncThunk(
    "get/tourPlace",
    async ({token,address,page} : {token : string,address:string,page:number}
) =>{

    const response = await axios.get(`/api/v1/place/search?page=${page}&size=10`,{
        headers : {
            Authorization : token,
            "Content-Type" : "application/json",
        }
    });

    const {data} = response;
    console.log(data);
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