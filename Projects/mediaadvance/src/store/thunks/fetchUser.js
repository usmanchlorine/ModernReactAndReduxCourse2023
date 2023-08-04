import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/// yeh thunk function and jo kai PURPOSE legha yeh kouch bhi ho sakta hai  and async function second argument mai legha hamesha 
//// YAAAAD RAHE JO bhi RETURN KAROGHAY WOH AUTOMATICALLY action.payload mai chalejaigha fetchuser.fullfilled dispatch hooga 
const fetchUser = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:3005/users")
    await pause(1000)
    return response.data



})


const pause = (Duration) => {
    return new Promise(async (resolve) => {
        setTimeout(resolve, Duration)

    })

}
export { pause }
export { fetchUser }