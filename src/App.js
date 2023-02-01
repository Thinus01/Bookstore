import './App.css';
import React, { PureComponent } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import  Books  from './components/bookList';
import Book from './components/book';
import  Categories  from './components/categories';


class App extends PureComponent {
  render() {
    return (
      <>
        <nav>
          <ul id="UL">
            <li className="Li"><Link to="/">Books</Link></li>
            <li className="Li" id="CalcLi"><Link to="/Categories">Categories</Link></li>
          </ul>
          <h1>Welcome to our crazy bookstore</h1>
        </nav>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </>
    );
  }
}

export default App;
