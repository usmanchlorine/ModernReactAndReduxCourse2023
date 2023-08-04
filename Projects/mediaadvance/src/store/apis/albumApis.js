import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const albumApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"

    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: (user) => {
                    return {
                        url: "http://localhost:3005",
                        params: {
                            userId: user.id,

                        },
                        method: "GET",
                    }
                }
            })
        }
    }



})


export { albumApi }