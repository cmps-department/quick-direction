import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbarReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        navbar: navbarReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;
