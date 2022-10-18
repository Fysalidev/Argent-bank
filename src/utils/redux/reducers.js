import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogIn : false,
    token: false,
    user: false,
  },

  reducers: {

    logIn: (state, action) => {
      state.token = action.payload
    },

    logOut: (state) => {
      if (state.isLogIn === true) {
        state.token = false;
        state.user = false;
        state.isLogIn = false;
      }
    },

    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogIn = true;
    },
  },
});

export const { logIn, logOut, setUser, rememberUser, forgotUser, connectUser } = userSlice.actions;
export const userReducer = userSlice.reducer;