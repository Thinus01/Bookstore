import React from 'react';
import PropTypes from 'prop-types';

const Book = (title, author) => {
  //below title and author are simply placeholders
  title = 'book 1';
  author = 'author 1';
  return (
    <div>
      <tr>
        <td>{ title }</td>
        <td>{ author }</td>
      </tr>
      <button>Remove</button>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Book;