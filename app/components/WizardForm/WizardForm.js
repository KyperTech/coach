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
    if (!this.props.start) {
      this.props.onPrevClick();
    }
  }
  handleSubmit() {
    console.log('handle submit called');
    if (this.props.end) {

    }
    this.props.onNextClick();
  }
  render() {
    let submit = this.props.end ? (
        <Link to={`/${this.props.linkTo}`} className="WizardForm-Submit">
          <Icon style="selected">
            <Check />
          </Icon>
        </Link>
    ) : (
        <button className="WizardForm-Submit" onClick={this.handleSubmit}>
          <Icon style="light">
            <Arrow direction="right"/>
          </Icon>
        </button>
    );

    let previous = this.props.start ? '' : (
        <button className="WizardForm-Submit" onClick={this.handlePrevious}>
          <Icon style="light" show={ !this.props.start }>
            <Arrow direction="left"/>
          </Icon>
        </button>
    );

    return (
      <div className="WizardForm">
        { previous }
        <div className="WizardForm-Tile">
          { this.props.children }
        </div>
        { submit }
      </div>
    )
  }
}

WizardForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func,
  start: PropTypes.bool,
  end: PropTypes.bool,
  linkTo: PropTypes.string
}

WizardForm.defaultProps = {
  start: false,
  end: false,
  linkTo: ''
}

export default WizardForm;
