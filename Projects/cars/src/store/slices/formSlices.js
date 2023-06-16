import { createSlice } from "@reduxjs/toolkit";



const form = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: "",

    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeCost: (state, action) => {
            state.cost = action.payload
        }
    }
})

export const { changeName, changeCost } = form.actions;
export const formReducer = form.reducer;