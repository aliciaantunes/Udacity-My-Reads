import React from "react";
import PropTypes from 'prop-types';
import Book from './Book';


function Bookshelf({books, title, changeBookShelf}) {

return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
               {books.map(book => ( 
                 <Book key={book.id} 
                 book={book} 
                 onChangeShelf={changeBookShelf} />
                ))}
              </ol>
            </div>
         </div>
      );
    }

    Bookshelf.propTypes = {
        books: PropTypes.arrayOf(PropTypes.any),
        title: PropTypes.string,
        changeBookShelf: PropTypes.func.isRequired,
      };
    
      Bookshelf.defaultProps = {
        books: [],
        title: '',
      };



export default Bookshelf;