import { configureStore } from "@reduxjs/toolkit"
import { slice } from "./features/test/state";
import modalsReducer from "./features/modal/slice";

export const store = configureStore({
    reducer : {
        // reduer를 생성하면 넣어주세요
        test : slice.reducer,
        modals : modalsReducer
    }
});

// Redux의 type을 꺼내줍니다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;