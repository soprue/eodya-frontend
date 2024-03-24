import { configureStore } from "@reduxjs/toolkit"
import { slice } from "./features/test/state";

export const store = configureStore({
    reducer : {
        // reduer를 생성하면 넣어주세요
        test : slice.reducer
    }
});

// Redux의 type을 꺼내줍니다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;