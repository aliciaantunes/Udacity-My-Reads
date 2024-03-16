import React, { useEffect, useState } from 'react';

import * as BooksAPI from '../BooksAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookList from './Pages/BookList';
import BookSearch from './Pages/BookSearch';

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
          <Route exact path="/" element={<BookList myBooks={myBooks} changeBookShelf={changeBookShelf} />}/>
          <Route path='/search' render={() => <BookSearch myBooks={myBooks} changeBooksShelf={changeBookShelf} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  
)


  
}

export default App;
