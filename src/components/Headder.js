import React, { Component } from 'react';


class Headder extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li>
                <a>trang chủ</a>
              </li>
              <li className="active">
                <a>danh mục sản phẩm</a>
              </li>
            </ul>
          </div> 
      </nav>
      </div>
    );
  }
}

export default Headder ;
