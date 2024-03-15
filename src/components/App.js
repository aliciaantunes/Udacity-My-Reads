import React, { useEffect, useState } from 'react';
import Book from './common/Book';
import * as BooksAPI from '../BooksAPI';

import "./App.css";


function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [myBook, setMyBook] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    BooksAPI.getAll()
    .then((books) => {
      setMyBooks(books);
    });

    BooksAPI.get("sJf1vQAACAAJ")
    .then((book) => {
      setMyBook(book);
    });
  }, []);

  console.log(myBooks)
  console.log(myBook)
  console.log(count)
  return (
    <div className="app">
      <Book book={myBook} onChangeShelf={() => {}} />
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default App;
