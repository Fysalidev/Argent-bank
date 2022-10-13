import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router";

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    token: null,
  },
  reducers: {

    logIn: (state, action) => {
        if (state.login === false){
          state.login = true;
          state.token = action.payload;
        }
    },

    logOut: (state) => {
        if (state.login === true){
          state.login = false;
          state.token = null;
        }
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;