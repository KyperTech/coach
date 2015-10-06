import React, { Component, PropTypes } from 'react';
import './Header.scss';

class Header extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
  }

  render() {
    return (
      <div className="Header">
        <span className="Header-Title">Find me a <input className="Header-Input" /> coach</span>
      </div>
    )
  }
}

Header.propTypes = {
};

export default Header;
