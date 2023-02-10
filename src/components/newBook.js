import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';
import { addHandler } from '../redux/books/books';
import styles from '../styles/newBook.module.css';

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
      <h2 className={styles.h2}>ADD NEW BOOK</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <input id={styles.space} className={styles.input} type="text" name="title" value={bookState.title} onChange={addBook} placeholder="Add book name" required />
        <input className={styles.input} type="text" name="author" value={bookState.author} onChange={addBook} placeholder="Add author name" required />
        <input className={styles.input} type="text" name="category" value={bookState.category} onChange={addBook} placeholder="Add category name" required />
        <button className={styles.button} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBook;
