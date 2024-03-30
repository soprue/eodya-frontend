import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {ModalsType } from "../../../types/ModalsType";

const initialState : ModalsType[] = [];

const modalSlice = createSlice({
    name : "modals",
    initialState,
    reducers : {
        open : (state,action : PayloadAction<any>)=>{

            const {Component,props} = action.payload;

            return [
                ...state,
                {
                    Component,
                    props,
                    isOpen : true
                }
            ];

        },
        close : (state,action : PayloadAction<any>)=>{
            const {Component} = action.payload;
            console.log(Component);
            return state.filter(item=>item.Component !== Component); // 컴포넌트가 동일하지 않으면 삭제
        }
    }
});

export const {open,close} = modalSlice.actions

export default modalSlice.reducer;