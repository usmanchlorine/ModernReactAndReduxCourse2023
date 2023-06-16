import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../store/thunks/fetchUser'
export default function UsersList() {
    const { isLoading, data, error } = useSelector(state => state.user)



    const userList = data.map(user => {
        return <span>{user.name}</span>
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    return (

        <>
            <h1 className="text-4xl font-semibold text-green-700 mb-3">USER LIST</h1>
            <div className=" flex flex-col gap-y-2.5">
                {isLoading ? "LOADing...." : error ? "ERROR FETCHING DATA" : userList}
            </div>
        </>
    )
}
