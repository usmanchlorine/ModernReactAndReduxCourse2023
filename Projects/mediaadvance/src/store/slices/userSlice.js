import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
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


        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        })

        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;

        })

        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;

            const update = state.data.filter(user => {
                console.log(user.id, action.payload.id);
                return user.id !== action.payload.id;
            })


            state.data = update

        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})


export const userReducer = userSlice.reducer