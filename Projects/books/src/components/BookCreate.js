import React, { useState } from 'react'

export default function BookCreate({ createBook }) {
    const [text, setText] = useState('')
    const createBookhandler = () => {
        createBook(text)
        setText('')

    }

    return (
        <div className='container p-1  border'>
            <h1>
                Create Books
            </h1>
            <h4>Title</h4>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='form-control w-25 mt-4'></input>
            <button className='btn btn-primary mt-4' onClick={createBookhandler}>Add book</button>

        </div>
    )
}
