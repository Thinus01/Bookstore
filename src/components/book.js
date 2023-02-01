import React, { useState } from 'react';
import PropTypes from 'prop-types';

// below strings are only placeholders and will be removed when functionality has been implimented
const Book = ({ title, author }) => (
  <div>
    <tr>
      <td>{ title }</td>
      <td>{ author }</td>
    </tr>
    <button type="submit">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const Display = () => {
  const [state] = useState({ title: 'book 1', author: 'author 1' });
  const { title, author } = state;
  useState({ title, author });
  return (
    <>
      <Book
        title={title}
        author={author}
      />
    </>
  );
};

export default Book;
export { Display };
