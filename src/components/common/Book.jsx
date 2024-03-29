import React from "react";
import PropTypes from "prop-types";

function Book ({book, onChangeShelf}) {
    const ChangeShelf = (e) => {
        const shelf = e.target.value;
        onChangeShelf(book, shelf);
    }
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
         <div
            className="book-cover"
            style={{
             width: 128,
             height: 193,
             backgroundImage:
             `url("${book.imageLinks && book.imageLinks.thumbnail}")`,
            }}
             ></div>
            <div className="book-shelf-changer">
              <select onChange={ChangeShelf} value={book.shelf || 'none'}>
                 <option value="MoveTo" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
              </select>
            </div>
            </div>
            <div className="book-title">
                {book.title}
            </div>
            <div className="book-authors">
                {book.authors}
            </div>
          </div>
        </li>
    );
    }

    Book.propTypes = {
        book: PropTypes.objectOf(PropTypes.any).isRequired,
        onChangeShelf: PropTypes.func.isRequired,
    };

    export default Book;