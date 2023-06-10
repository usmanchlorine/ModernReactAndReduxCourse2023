import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookShow from './BookShow';
export default function BookList({ books, deletebook,editBook }) {
    return (
        <div className='bg-dark text-white px-5  mb-5' style={{ minHeight: '75vh' }}>
            <h1>
                Book Lists
            </h1>
            <div className='d-flex gap-3'>
                {
                    books.map((book) => {
                        return (<BookShow deletebook={deletebook} editBook={editBook} key={book.id} id={book.id} title={book.title} />)
                    })
                }

            </div>
        </div>
    )
}
