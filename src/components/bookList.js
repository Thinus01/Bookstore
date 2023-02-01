import React from 'react';
import NewBook from './newBook';
import Book from './book';

const BookList = () => (
  <section>
    <NewBook />
    <table>
      <p>Book</p>
      <p>Author</p>
      <ul>
        <li><Book /></li>
      </ul>
    </table>
  </section>
);

export default BookList;
