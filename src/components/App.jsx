import React, { useEffect, useState } from 'react';

import * as BooksAPI from '../BooksAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookList from './Pages/BookList';

import "./App.css";


//state e props
function App() {
  const [myBooks, setMyBooks] = useState([]);
 
useEffect(() => {
  fetchBookList();
}, []);

const fetchBookList = () => {
   BooksAPI.getAll()
    .then((books) => {
      setMyBooks(books);
    });
};
    
const changeBookShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
    fetchBookList();
  });
};

return (
  <BrowserRouter>
    <div className="app">
      <div>
        <Routes>
          <Route path="/" element={<BookList myBooks={myBooks} changeBookShelf={changeBookShelf} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  
)


  
}

export default App;
