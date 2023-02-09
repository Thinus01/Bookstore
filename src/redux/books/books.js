import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH = 'bookstore/books/FETCHED';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'Hwvvdb1iaoeb56sR14Ms';
const appResourceUrl = `${baseUrl}/${appId}/books`;
const initialState = [];

const addHandler = createAsyncThunk(
  ADD,
  async (book, { dispatch }) => {
    await fetch(appResourceUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({ type: ADD, payload: book });
  },
);

const removeHandler = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    await fetch(`${appResourceUrl}/${id}`, { method: 'DELETE' });
    dispatch({ type: REMOVE, payload: id });
  },
);

const fetchHandler = createAsyncThunk(
  FETCH,
  async (post, { dispatch }) => {
    const response = await fetch(appResourceUrl);
    const jsonData = await response.json();
    const books = Object.keys(jsonData).map((id) => ({
      ...jsonData[id][0],
      item_id: id,
    }));
    dispatch({
      type: FETCH,
      payload: books,
    });
  },
);

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
export { fetchHandler, addHandler, removeHandler };
