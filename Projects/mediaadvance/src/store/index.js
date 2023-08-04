import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumApi } from "./apis/albumApis";
const store = configureStore({
    reducer: {
        user: userReducer,
        albums: albumApi.reducer,
    }
})
setupListeners(store.dispatch)

export { store }