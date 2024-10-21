import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        userData: null,
    },
    reducers: {
        login(state, action) {
            const { email, password } = action.payload;
            const storedUserData = JSON.parse(localStorage.getItem('userData'));

            // Check if the credentials match
            if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
                state.isAuthenticated = true;
                state.userData = storedUserData;
                alert('Login successful!');
            } else {
                alert('Invalid email or password!');
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            state.userData = null;
            localStorage.removeItem('userData');
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
