import { createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api"

const api = new Api()
const tokenRequest = (email, password) => api.tokenRequest(email, password);
const userRequest = (token) => api.userRequest()


const userSlice = createSlice({
  name: "user",
  initialState: {
    token: false,
    user : false,
  },

  reducers: {

    logIn: (state, action) => {
        
        const token  = tokenRequest(action.payload.email, action.payload.password)

        if(state.token){
          const {} = userRequest(token)
          state.token = token
          console.log()
          //Stop pour aujourd'hui....
        }


        if (state.login === false){
          state.login = true;
          state.token = action.payload;
        }
    },

    logOut: (state) => {
        if (state.login === true){
          state.login = false;
          state.token = null;
          state.user = null;
        }
    },

    setUser: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { logIn, logOut, setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;