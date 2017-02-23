import React, { Component } from 'react';
import './Header.css';
import logo from './wwf-logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        Test Header
      </div>
    );
  }
}

export default Header;
