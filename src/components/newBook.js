import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const NewBook = () => {
  const [bookState, setBookState] = useState({ id: '', title: '', author: '' });
  const bookData = useSelector((state) => state.books);
  const booksArray = bookData.books;
  const bookID = booksArray.length;

  const onAddingBook = (e) => {
    setBookState({
      ...bookState, id: (bookID + 1).toString(), [e.target.name]: [e.target.value].toString(),
    });
  };

  const dispatch = useDispatch();
  const onBookSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAction(bookState));
    setBookState({ id: '', title: '', author: '' });
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={onBookSubmit}>
        <input type="text" name="title" value={bookState.title} onChange={onAddingBook} placeholder="Add book name" required />
        <input type="text" name="author" value={bookState.author} onChange={onAddingBook} placeholder="Add author name" required />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default NewBook;
