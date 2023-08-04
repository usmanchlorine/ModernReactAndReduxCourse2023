import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const deleteUser = createAsyncThunk("users/remove", async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    console.log("user deleted successfully")
    return user;
})


export { deleteUser }