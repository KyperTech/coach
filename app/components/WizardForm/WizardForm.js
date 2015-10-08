import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './WizardForm.scss';

class WizardForm extends Component {

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
      <div className="WizardForm">
        <div className="WizardForm-Tile">
          { this.props.children }
        </div>
        <button className="WizardForm-Submit" onClick={this.handleSubmit}>-></button>
      </div>
    )
  }
}
WizardForm.propTypes = {

}
export default WizardForm;
