import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    token: null,
  },
  reducers: {

    logIn: (state, action) => {
        state.login = true;
        state.token = action.payload;
    },

    logOut: (state) => {
        state.login = false;
        state.token = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;