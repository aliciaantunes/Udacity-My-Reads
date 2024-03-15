import React from "react";
import { PropTypes } from "react";

function Book ({book, onChangeSelf}) {
    const ChangeSelf = (e) => {
        const shelf = e.target.value;
        onChangeSelf(book, shelf);
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
             'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            }}
             ></div>
            <div className="book-shelf-changer">
              <select onChange={ChangeSelf} value={book.shelf || 'none'}>
                 <option value="none" disabled>Move to...</option>
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