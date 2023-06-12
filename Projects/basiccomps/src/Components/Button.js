

import React from 'react'

export default function Button({ children }) {
    return (
        <div className=''>
            <button className='bg-green-500 p-3 rounded-lg text-white font-bold'>{children}</button>
        </div>

    )
}
