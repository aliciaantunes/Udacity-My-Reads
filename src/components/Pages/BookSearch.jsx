import { useState } from "react";
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







}

export default BookSearch;