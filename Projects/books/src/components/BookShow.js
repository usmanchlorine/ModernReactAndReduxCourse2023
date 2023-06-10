import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import BookEdit from './BookEdit';

export default function BookShow({ title, deletebook, id,editBook }) {
    const [toggleedit, settoggle] = useState(false);

    return (
        <div className="card" style={{ width: '18rem', height: 'fit-content' }}>
            <div className='d-flex justify-content-end gap-3'>
                <button className='btn btn-warning w-25 ' onClick={() => deletebook(id)}>Delete</button>
                <button className='btn btn-warning w-25 ' onClick={() => settoggle(!toggleedit)}>{toggleedit ? 'cancel' : 'edit'}</button>
            </div>

            <img className="card-img-top" src="book.jpg" alt="img" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">this is the book</p>
            </div>
            {
                toggleedit ? <BookEdit id={id} toggle={settoggle} editBook={editBook} /> : ""
            }
        </div>
    )
}
