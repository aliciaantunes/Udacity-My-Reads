import React, {useState, useEffect} from 'react';
import { debounce } from 'throttle-debounce';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../common/Book'
import PropTypes from 'prop-types';


function BookSearch({myBooks, changeBookShelf}) {
    const [books, setBooks] = useState([]);
    const [searchParameter, setSearchParameter] = useState('');

    const searchBooks = debounce(400, (searchParameter) => {
       if (searchParameter.length > 0) {
        BooksAPI.search(searchParameter, 10)
           .then((response) => {
             if (response.length > 0) {
                  setBooks(response);
             } else {
              setBooks([]);
             }
           });
       } else {
            setBooks([]);
       }
    });

    const onSearchInputChange = (e) => {
      const searchParameter = e.target.value;
      setSearchParameter(searchParameter);
      searchBooks(searchParameter);
    };

    useEffect(() => {
      return () => {
      };
    }, []);

    const renderBooks = () => {
      return books && books.map((unshelfed) => {
        const book = { ...unshelfed};

        myBooks.forEach((myBook) => {
          if (book.id === myBook.id) {
            book.shelf = myBook.shelf;
          }
        });

        return (
          <Book 
          key={book.id} 
          book={book} 
          onChangeShelf={changeBookShelf} />
        );
      });
    }


   return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to="/">
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input 
            type='text' 
            placeholder='Search by title or author' 
            value={searchParameter} 
            onChange={onSearchInputChange}/>
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
        {renderBooks()}
        </ol>
      </div>
    </div>
   );
}

BookSearch.propTypes = {
  myBooks: PropTypes.arrayOf(PropTypes.any),
  changeBooksShelf: PropTypes.func.isRequired,
}

BookSearch.defaultProps = {
  myBooks: [],
}

export default BookSearch;