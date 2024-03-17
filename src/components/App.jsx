import React, { useEffect, useState } from 'react';

import * as BooksAPI from '../BooksAPI';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookList from './Pages/BookList';
import BookSearch from './Pages/BookSearch';
import Loading from './common/Loading';

import "./App.css";


//state e props
function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
useEffect(() => {
  fetchBookList();
}, []);

const fetchBookList = () => {
   setIsLoading(true);
   BooksAPI.getAll()
    .then((books) => {
      setMyBooks(books);
      setIsLoading(false);
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
      {
        isLoading && <Loading />
      }
      <div>
        <Routes>
          <Route exact path="/" element={<BookList myBooks={myBooks} changeBookShelf={changeBookShelf} />}/>
          <Route path='/search' element={<BookSearch myBooks={myBooks} changeBookShelf={changeBookShelf} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  
)


  
}

export default App;
