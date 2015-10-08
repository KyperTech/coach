import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Arrow from '../icons/Arrow';
import './WizardForm.scss';

class Wizard extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getInitialState() {
    return {
      step: 1
    }
  }
  handleKeyPress() {

  }
  handleSubmit() {
    console.log('handle submit called');
    this.props.onNextClick();
  }
  render() {
    let currentStep = this.props.steps[this.state.step];
    return {currentStep}
  }
}
Wizard.propTypes = {
  steps: PropTypes.array.isRequired,
}
export default Wizard;
