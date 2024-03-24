import { createSlice } from "@reduxjs/toolkit"

interface State  {
    value : string
}

const initialState : State = {
    value : "화이팅"
}

// 테스트용으로 만든 slice
export const slice = createSlice({
    name : "test", // slice 이름
    initialState, // state 저장공간
    reducers : {} // 리듀서
})

export default slice.reducer; // slice을 작성해서 store.ts에 넣어주세요