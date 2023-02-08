import React from 'react';
import { useSelector } from 'react-redux';
import NewBook from './newBook';
import Book from './book';

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  return (
    <section>
      <NewBook />
      <div>
        <p>Book</p>
        <p>Author</p>
        <ul>
          {booksData.books.map((book) => (
            <Book title={book.title} id={book.id} author={book.author} key={book.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BookList;
