import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, pause } from '../store/thunks/fetchUser'
import { addUser } from '../store/thunks/addUser'
import Button from './Button'
import Skelleton from './Skelleton'
import Skeleton from './Skeleton'
import SpinnerLoading from './SpinnerLoading'
import Userlistitem from './Userlistitem'
export default function UsersList() {
    const { data } = useSelector(state => state.user)
    const [isLoadingUser, setisLoadingUser] = useState(false)
    const [isError, setisError] = useState(null)

    const [isCreatingUser, setisCreatingUser] = useState(false)
    const [isCreatingErr, setisCreatingErr] = useState(null)


    const userList = data.map(user => {
        return <Userlistitem key={user.id} user={user} />

        // return (<div key={user.id} className='mb-2 border bg-green-900 text-white font-semibold rounded'>
        //     <div className='flex p-2 justify-between item-center cursor-pointer'>{user.name}</div>
        // </div>)
    })

    const dispatch = useDispatch()
    useEffect(() => {
        setisLoadingUser(true)
        dispatch(fetchUser())
            .unwrap()
            .catch((err) => {
                setisError(err)

            })

            .finally(() => {
                setisLoadingUser(false)
            })



    }, [dispatch])

    const handleUserAdd = () => {
        setisCreatingUser(true)
        dispatch(addUser())
            .unwrap()

            .catch((err) => {
                setisCreatingErr(err)
            })
            .finally(() => {
                setisCreatingUser(false)
            });
    }
    return (

        <>
            <h1 className="text-4xl font-semibold text-white mb-3">USER LIST</h1>
            <div className='flex flex-row  justify-between m-3'>
                <Button className="bg-slate-200" onClick={handleUserAdd}>
                    {isCreatingUser ? <SpinnerLoading /> : "+ Add User"}

                </Button>

            </div>
            <div className=" flex flex-col gap-y-2.5">
                {isLoadingUser ? <Skeleton /> : isError ? "ERROR FETCHING DATA" : userList}

            </div>
        </>
    )
}
