const STATUS = 'bookstore/categories/STATUS';
const initialState = { categories: [] };

export const status = () => ({ type: STATUS });

const categoriesReducer = (state = initialState, action) => {
  if (action.type === STATUS) {
    return {
      categories: [...state.categories, 'Under construction'],
    };
  }
  return state;
};

export default categoriesReducer;
