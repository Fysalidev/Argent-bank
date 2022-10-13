import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router";

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    token: null,
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    createdAt: null,

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

    loadUser: (state, action) => {
      if (action.payload.status === 200){
        state.id = action.payload.body.id
        state.email = action.payload.body.email
        state.firstName = action.payload.body.firsName
        state.lastName = action.payload.body.lastName
        state.createdAt = action.payload.body.createdAt
        state.updatedAt = action.payload.body.updatedAt
      }
    }
  },
});

export const { logIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;