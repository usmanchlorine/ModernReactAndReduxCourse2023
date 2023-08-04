import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker'
import React from 'react'
import { pause } from "./fetchUser";

const addUser = createAsyncThunk("user/add", async () => {
    const response = await axios.post(" http://localhost:3005/users", {
        name: faker.name.fullName(),
    })

  

    return response.data
}


)


export { addUser }