const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = {
  books: [{
    id: '1',
    title: 'Slow Brewing Tea',
    author: 'Randy Loubier',
  },
  {
    id: '2',
    title: 'The family across the street',
    author: 'Nicole Trope',
  },
  {
    id: '3',
    title: 'Verity',
    author: 'Colleen Hoover',
  }],
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
