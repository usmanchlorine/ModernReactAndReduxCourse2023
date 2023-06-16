import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    //HAM nai extra reducer ko user kia hai convential reducers ko nahi woh bhi actions generate karte hai khud sai yaha actions THUNK kar raha hai 
    extraReducers: (builder) => {   /// yeh yaad rakhna fetchUser async function and yeh reducers hamesha sync hote hai 
        // fetchuser.pending is action so is fullfilled and also rejected basically yeh teen cases hai  thunk kai 
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload; // automatical aagaya hai hai thunk sai return howa hai yeh 

        });

        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error; // automatical aagaya hai hai thunk sai

        });
    }
})


export const userReducer = userSlice.reducer