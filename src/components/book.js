import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/book.module.css';
import { removeHandler } from '../redux/books/books';
import Progress from './progress';

// Book handels each section containing corresponding book information that gets displayed
const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;
  const remove = () => {
    dispatch(removeHandler(id));
  };
  const percentage = Math.random(100);
  return (
    <section className={styles.BookEntry}>
      <div className={styles.Detail}>
        <p className={styles.Category}>{ category }</p>
        <p className={styles.Title}>{ title }</p>
        <p className={styles.Author}>{ author }</p>
        <p className={styles.Option}>Comments</p>
        <p className={styles.Option}><button className={styles.OptionBtn} onClick={remove} type="submit">Remove</button></p>
        <p className={styles.Option}>Edit</p>
      </div>
      <div className={styles.Progress}>
        <Progress percentage={percentage} circleWidth="200" />
      </div>
      <div className={styles.ChapDiv}>
        <p className={styles.ChapHead}>CURRENT CHAPTER</p>
        <p className={styles.ChapProg}>Introduction</p>
        <button className={styles.ChapBtn} type="button">UPDATE PROGRESS</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
