


function BookList({myBooks, changeBookShelf}){
  
    const filterBooks = (shelf) => {
      return myBooks.filter(book => (book.shelf === shelf));
    }
};

export default BookList;