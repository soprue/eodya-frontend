import { configureStore } from "@reduxjs/toolkit"
import { slice } from "./features/test/state";
import spotViewReducer from "./features/main/spotView/slice";
import spotInfoY from "./features/main/spotInfo/ySlice";
import spotInfoOpen from "./features/main/spotInfo/InfoSlice";
import tourOpen from "./features/main/tourList/openSlice";
import mainMarker from "./features/main/marker/markerSlice";

export const store = configureStore({
    reducer : {
        // reduer를 생성하면 넣어주세요
        test : slice.reducer,
        spotView : spotViewReducer,
        spotInfoY,
        spotInfoOpen,
        tourOpen,
        mainMarker,
    }
});

// Redux의 type을 꺼내줍니다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;