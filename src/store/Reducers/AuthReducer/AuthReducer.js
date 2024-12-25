import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    LoginUser: 1,
};

export const AuthReducer = createSlice({
    name: 'RealStateAuth',
    initialState,
    reducers: {
        changeTab: (state, action) => {
            state.LoginUser = action.payload;
        }
    },
});

export const { changeTab } = AuthReducer.actions;
export default AuthReducer.reducer;