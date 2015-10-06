import React, { Component, PropTypes } from 'react';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  submitSearch(searchVal) {
    this.props.onSearchSubmit(searchVal);
  }
  handleKeyPress(event) {
    if(event.keyCode == 13){
      console.warn('ENTER CLICKED');
      this.submitSearch(this.coachType);
    }
  }
  handleInputChange(event) {
    this.coachType = event.target.value;
    console.log('coach type changed:', this.coachType);
  }
  render() {
    return (
      <div className="Header">
        <span className="Header-Title">Find me a
        <input className="Header-Input" onChange={this.handleInputChange} onKeyUp={this.handleKeyPress}/> 
        coach</span>
      </div>
    )
  }
}

Header.propTypes = {
  onSearchSubmit: PropTypes.func
};

export default Header;
