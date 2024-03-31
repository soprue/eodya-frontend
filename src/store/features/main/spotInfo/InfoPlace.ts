import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type getInfoPlace = {
    loading : boolean;
    info : {
        name: string;
        addressDetail: string;
        image: string;
        placeStatus: string;
        bookmarkCount: number;
        bookmarkStatus: boolean;
        placeId : number;
    },
    error : boolean;
}

const initialState :getInfoPlace = {
    loading: true,
    info: {
        name: "",
        addressDetail: "",
        image: "",
        placeStatus: "",
        bookmarkCount: 0,
        bookmarkStatus: false,
        placeId : 0
    },
    error: false
};

export const getPlace = createAsyncThunk("get/place",async ({token,placeId} : {token : string,placeId:number}) =>{

    const response = await axios.get(`/api/v1/place/detail/${placeId}`,{
        headers : {
            Authorization : token
        }
    });
    const {data} = response;
    return {...data,placeId};

});

const InfoPlace = createSlice({
    name : "InfoPlace",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getPlace.pending,(state)=>{
            state.loading = false;
        })
        .addCase(getPlace.fulfilled,(state,action)=>{
            state.info = action.payload;
        })
        .addCase(getPlace.rejected,(state)=>{
            state.error = true;
        })
    },
});

export default InfoPlace.reducer;