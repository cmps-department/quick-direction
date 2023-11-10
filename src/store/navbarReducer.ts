import { createSlice } from "@reduxjs/toolkit";

interface NavbarStore {
    isOpened: boolean;
}

const initialState: NavbarStore = {
    isOpened: false,
};

export const navbarReducer = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        open: (state) => {
            state.isOpened = true;
        },
        close: (state) => {
            state.isOpened = false;
        },
        toggle: (state) => {
            state.isOpened = !state.isOpened;
        }
    },
});

export const { open, close, toggle } = navbarReducer.actions;
export default navbarReducer.reducer;
