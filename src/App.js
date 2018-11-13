import React, { Component } from 'react';
import './App.css';
import{ BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';

class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
        {/*MENU*/}
        <nav className="navbar navbar-inverse">
        
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/" className="my-link">TRANG CHU</Link>
            </li>
            <li>
              <Link to="/product" className="my-link">SAN PHAM</Link>
            </li>
          </ul>
        </nav>
      
      </div>
      </Router>
    );
  }
}

export default App;