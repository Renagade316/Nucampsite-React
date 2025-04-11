import { createSlice } from "@reduxjs/toolkit";
//import { useState } from "react";
const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => { 
            //const newUser = {...state, currentUser: action.payload }
            state.currentUser = action.payload
        }
    }
})

export const userReducer = userSlice.reducer
export const {setCurrentUser} = userSlice.actions
export const selectCurrentUser = (state) => state.user.currentUser;