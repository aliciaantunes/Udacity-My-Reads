import React, {useState, useEffect} from 'react';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from '../../utils/BooksAPI';


function BookSearch({myBooks, changeBooksShelf}) {
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
    }


   return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title or author' value={searchParameter} onChange={onSearchInputChange}/>
        </div>
      </div>
      <div className='search-books-results'>
      </div>
    </div>
   )




}

export default BookSearch;