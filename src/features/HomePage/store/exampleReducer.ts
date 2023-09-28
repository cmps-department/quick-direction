import { createSlice } from '@reduxjs/toolkit'

interface sessionData {
    isLoggedIn: boolean
}

const initialState: sessionData = {
    isLoggedIn: false
}

export const exampleReducer = createSlice({
    name: 'mapReducer',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
    },
});

export const { setIsLoggedIn } = exampleReducer.actions;
export default exampleReducer.reducer;
