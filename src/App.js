import './App.css';
import React, { PureComponent } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsPersonFill } from 'react-icons/bs';
import Books from './components/bookList';
import Categories from './components/categories';

class App extends PureComponent {
  render() {
    return (
      <>
        <nav>
          <span className="h1">Bookstore CMS</span>
          <Link className="Books" to="/">BOOKS</Link>
          <Link className="Categories" to="/Categories">CATEGORIES</Link>
          <BsPersonFill className="icon" color="#0290ff" size={25} />
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
