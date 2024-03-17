import React from 'react';
import Bookshelf from '../common/BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function BookList({myBooks, changeBookShelf}){
  
    const filterBooks = (shelf) => {
      return myBooks.filter(book => (book.shelf === shelf));
  }
     
     return (
        <div className="list-books">
           <div className="list-books-title">
             <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Bookshelf books={filterBooks('currentlyReading')} title= "Currently Reading" changeBookShelf={changeBookShelf} />
            <Bookshelf books={filterBooks('wantToRead')} title="Want to Read" changeBookShelf={changeBookShelf} />
            <Bookshelf books={filterBooks('read')} title="Read" changeBookShelf={changeBookShelf} />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
          </div>
      </div>
      </div>               
     );
   }

   BookList.propTypes = {
      myBooks: PropTypes.arrayOf(PropTypes.any),
      changeBookShelf: PropTypes.func.isRequired,
   }

   BookList.defaultProps = {
      myBooks: [],
   }

export default BookList;