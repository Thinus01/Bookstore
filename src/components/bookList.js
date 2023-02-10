import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewBook from './newBook';
import Book from './book';
import { fetchHandler } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchHandler());
  }, [dispatch]);

  return (
    <section>
      <div>
        <div>
          {bookData.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              key={book.item_id}
              category={book.category}
              id={book.item_id}
            />
          ))}
        </div>
        <NewBook />
      </div>
    </section>
  );
};

export default BookList;
