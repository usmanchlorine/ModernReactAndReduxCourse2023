import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/thunks/deleteUser';
import Button from './Button';
import { BsFillTrashFill, BsArrowDown } from 'react-icons/bs'
import SpinnerLoading from './SpinnerLoading';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { store } from '../store';

const Expandable = (props) => {
  
    return (
        <div className='w-full h-25 flex justify-between border border-collapse border-t-0 mt-1 p-2 items-center  bg-green-900'>
            <h1 className='text-white font-semibold text-xl'>Artist : {props.header.name}</h1>
            <Button className="bg-white text-black p-1">Add Album</Button>
        </div>
    )

}


export default function Userlistitem({ user }) {
    const dispatch = useDispatch()
    const [isloading, setisLoading] = useState(false);
    const [err, setError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handledeleteClick = () => {
        setisLoading(true);
        dispatch(deleteUser(user))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => {
                setisLoading(false);
            })


    }

    return (
        <div className='bg-green-900'>
            <div key={user.id} className='border flex justify-between  bg-green-900 text-white font-semibold rounded'>
                <div className='flex p-2 justify-between item-center cursor-pointer'>{user.name}</div>
                <div className='flex items-center gap-5'>
                    <BsArrowDown className='cursor-pointer bg-white text-black  rounded-sm' onClick={() => setIsOpen(!isOpen)}></BsArrowDown>
                    {isloading ? <SpinnerLoading /> : <BsFillTrashFill className=' mr-2 cursor-pointer ' onClick={() => handledeleteClick(user)} />}

                </div>


            </div>

            {isOpen && <Expandable header={user} />}
        </div>



    )
}
