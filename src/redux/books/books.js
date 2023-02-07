const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = {
  books: [],
};

export const addBookAction = (newBook) => ({ type: ADD, newBook });
export const removeBookAction = (id) => ({ type: REMOVE, id });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };
    case REMOVE:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
