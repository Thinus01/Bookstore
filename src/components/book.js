import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeHandler } from '../redux/books/books';

// Book handels each div containing corresponding book information that gets displayed
const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const remove = () => {
    dispatch(removeHandler(id));
  };

  return (
    <div>
      <p>{ title }</p>
      <p>{ author }</p>
      <p>{ category }</p>
      <button onClick={remove} type="submit">Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
