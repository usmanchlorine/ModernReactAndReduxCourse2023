import { configureStore } from "@reduxjs/toolkit";
import { carReducer, addCar, removeCar, changeSearchTerm } from "./slices/carSlices";
import { formReducer, changeName, changeCost } from "./slices/formSlices";


const store = configureStore({
    reducer: {
        car: carReducer,
        form: formReducer,
    }
})

export {
    store,
    addCar,
    removeCar,
    changeCost,
    changeName,
    changeSearchTerm
}
