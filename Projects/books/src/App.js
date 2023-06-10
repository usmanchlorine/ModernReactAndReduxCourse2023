
import './App.css';
import BookList from './components/BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookCreate from './components/BookCreate';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {
  const [books, setBooks] = useState([])
  const [id, setIds] = useState(4)
  const createBook = (text) => {
    setBooks(books.concat({ id: id, title: text }));
    axios.post('http://localhost:3001/books', {
      body: JSON.stringify({ title: text })
    })
    setIds(id + 1)
  }

  const deleteBook = (ids) => {
    const updatedBooks = books.filter(book => {
      return book.id !== ids
    })
    axios.delete(`http://localhost:3001/books/${ids}`, {

    })
    setBooks(updatedBooks)

  }



  useEffect(() => {
    fetchbooks()

  }, []);
  const fetchbooks = async () => {
    const response = await axios.get(`http://localhost:3001/books`)

    const data = await response.data.map(book => {
      const { title } = JSON.parse(book["body"])
      return {
        id: book["id"],
        title: title
      }
    });


    setBooks(data);


  }

  const editBook = (id, title) => {
    const updatedbook = books.map(book => {
      if (book.id === id) {
        return { ...book, title: title }
      }
      return book;
    })

    setBooks(updatedbook)

  }
  console.log(books)
  return (
    <div className="App">
      <h1 align='center'>
        Book Reading Project
      </h1>
      <BookList books={books} deletebook={deleteBook} editBook={editBook} />

      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
