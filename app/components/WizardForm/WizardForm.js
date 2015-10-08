import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Arrow from '../icons/Arrow';
import './WizardForm.scss';

class WizardForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }
  handlePrevious() {
    console.log('handle previous called');
    this.props.onPrevClick();
  }
  handleSubmit() {
    console.log('handle submit called');
    this.props.onNextClick();
  }
  render() {
    return (
      <div className="WizardForm">
        <button className="WizardForm-Submit" onClick={this.handlePrevious}>
          <Arrow style="light" direction="left"/>
        </button>
        <div className="WizardForm-Tile">
          { this.props.children }
        </div>
        <button className="WizardForm-Submit" onClick={this.handleSubmit}>
          <Arrow style="light" direction="right"/>
        </button>
      </div>
    )
  }
}
WizardForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func
}
export default WizardForm;
