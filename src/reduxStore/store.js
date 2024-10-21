import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './signupSlice';
import authReducer from './authSlice'; // Import the authSlice

const store = configureStore({
    reducer: {
        signup: signupReducer,
        auth: authReducer, // Add the auth slice here
    },
});

export default store;
