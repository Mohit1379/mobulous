import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        userData: null,
    },
    reducers: {
        setUserData(state, action) {
            console.log(action.payload)
            state.userData = action.payload;
            // Save to local storage
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
    },
});

export const { setUserData } = signupSlice.actions;
export default signupSlice.reducer;
