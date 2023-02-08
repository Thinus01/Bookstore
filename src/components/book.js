import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBookAction(id));
  };
  return (
    <div>
      <p>{ title }</p>
      <p>{ author }</p>
      <button onClick={removeHandler} type="submit">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
