import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './NewCoach.scss';

class NewCoach extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleNameChange() {

  }
  handleTypeChange() {

  }
  handleUsernameChange() {

  }
  handleKeyPress() {

  }
  render() {
    return (
      <div className="NewCoach">
        <div className="NewCoach-Form">
          <span className="NewCoach-Label">PROFILE</span>
          <img className="NewCoach-Image" src="http://placehold.it/100X100" />
          <span className="NewCoach-Label">NAME</span>
          <input className="NewCoach-Input" onChange={this.handleNameChange}/>
          <span className="NewCoach-Label">USERNAME</span>
          <input className="NewCoach-Input" onChange={this.handleUsernameChange}/>
          <span className="NewCoach-Label">COACH TYPE</span>
          <input className="NewCoach-Input" onChange={this.handleTypeChange} onKeyUp={this.handleKeyPress}/>
        </div>
        <button className="NewCoach-Submit" onClick={this.handleSubmit}>-></button>
      </div>
    )
  }
}
NewCoach.propTypes = {

}
export default NewCoach;
