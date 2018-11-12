
//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Headder from './components/Headder';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Headder />
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Product />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Product />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Product />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Product />
            </div>
        </div>
        
      </div>
       
    );
  }
}

export default App;