import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './book.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/features/books/booksSlice';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;
  const dispatch = useDispatch();
  return (
    <div className="book-item">
      <div className="book-main">
        <div className="book-details">
          <p className="book-type">{category}</p>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
          <ul className="book-actions">
            <li className="book-action">
              <button type="button" className="comment-btn">
                Comments
              </button>
            </li>
            <li className="book-action">
              <button
                type="button"
                className="remove-btn"
                onClick={() => dispatch(removeBook(itemId))}
              >
                Remove
              </button>
            </li>
            <li className="book-action">
              <button type="button" className="edit-btn">
                Edit
              </button>
            </li>
          </ul>
        </div>
        <div className="book-completion">
          <div className="pourcentage-icon">
            <AiOutlineLoading3Quarters size="4em" color="#4386bf" />
          </div>
          <div className="pourcentage-completed">
            <p className="pourcentage-number">64%</p>
            <p className="pourcentage-text">completed</p>
          </div>
          <div className="line" />
        </div>
        <div className="book-update">
          <p className="current-chapter">Current Chapter</p>
          <p className="current-lesson">Chapter 17</p>
          <button type="button" className="updateButton">
            Update progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

Book.defaultProps = {
  book: {
    itemId: '', title: '', author: '', category: '',
  },
};

export default Book;
