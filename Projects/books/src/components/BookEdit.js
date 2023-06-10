import React, { useState } from 'react'

export default function BookEdit({ id, toggle, editBook }) {
    const [text, setText] = useState('')
    const handleedit = (id, text) => {
        editBook(id, text)
        toggle(false)
    }
    return (
        <div>
            <h2>title</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='form-control border border-5 w-100 px-3 mt-4'></input>
            <button className='btn btn-dark mt-4' onClick={() => handleedit(id, text)}>save changes</button>

        </div>
    )
}
