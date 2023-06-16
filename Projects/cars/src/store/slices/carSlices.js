import { createSlice, nanoid } from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'car',
    initialState: {
        searchTerm: '',
        cars: [],
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        /// action.payload={name:'civic',cost:'12400'}
        addCar: (state, action) => {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },

        removeCar: (state, action) => {
            const updated = state.cars.filter(c => { return c.id != action.payload.id })
            state.cars = updated
        },

    }
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;