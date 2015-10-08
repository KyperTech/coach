import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Arrow from '../icons/Arrow';
import './WizardForm.scss';
import styles from './WizardForm'
class WizardForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleKeyPress() {

  }
  handleSubmit() {
    console.log('handle submit called');
    this.props.onNextClick();
  }
  render() {
    return (
      <div className="WizardForm">
        <div className="WizardForm-Tile">
          { this.props.children }
        </div>
        <button className="WizardForm-Submit" onClick={this.handleSubmit}>
          <Arrow style="light" />
        </button>
      </div>
    )
  }
}
WizardForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  style: PropTypes.obj
}
export default WizardForm;
