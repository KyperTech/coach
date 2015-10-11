import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './WizardForm.scss';

import Icon from '../icons/Icon';
import Arrow from '../icons/Arrow';
import Check from '../icons/Check';

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
          <Icon style="light" show={ !this.props.start }>
            <Arrow direction="left"/>
          </Icon>
        </button>
        <div className="WizardForm-Tile">
          { this.props.children }
        </div>
        <button className="WizardForm-Submit" onClick={this.handleSubmit}>
          <Icon style="light" show={ !this.props.end }>
            <Arrow direction="right"/>
          </Icon>
          <Icon style="selected" show={ this.props.end }>
            <Check />
          </Icon>
        </button>
      </div>
    )
  }
}
WizardForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func,
  start: PropTypes.bool,
  end: PropTypes.bool
}
export default WizardForm;
