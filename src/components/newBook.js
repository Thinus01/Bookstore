import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';
import { addHandler } from '../redux/books/books';

const NewBook = () => {
  const [bookState, setBookState] = useState({
    id: '', title: '', author: '', category: '',
  });

  const addBook = (event) => {
    setBookState({
      ...bookState, item_id: v4(), [event.target.name]: [event.target.value].toString(),
    });
  };

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    setBookState({ title: '', author: '', category: '' });
    dispatch(addHandler(bookState));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" value={bookState.title} onChange={addBook} placeholder="Add book name" required />
        <input type="text" name="author" value={bookState.author} onChange={addBook} placeholder="Add author name" required />
        <input type="text" name="category" value={bookState.category} onChange={addBook} placeholder="Add category name" required />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default NewBook;
