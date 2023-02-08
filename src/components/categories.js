import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const categoriesData = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(status());
  };

  return (
    <div>
      <button onClick={onButtonClick} type="button">Check status</button>
      <h1>{categoriesData.categories[0]}</h1>
    </div>
  );
};

export default Categories;
