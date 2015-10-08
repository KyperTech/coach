import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../../actions';

// import './NewCoach.scss';

import InputGroup from '../../components/InputGroup/InputGroup';
import SelectGroup from '../../components/SelectGroup/SelectGroup';
import WizardForm from '../../components/WizardForm/WizardForm';

class NewCoachInfo extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }
  handleNameChange() {

  }
  handleTypeChange() {

  }
  handleUsernameChange() {

  }
  handleKeyPress() {

  }
  handleImageUpload(image) {

  }
  nextClick() {
    console.log('next this:', this);
    window.location.assign('/login');
  }
  render() {
    return (
      <WizardForm onNextClick={ this.nextClick }>
        <InputGroup onChange={this.handleTypeChange} label="date of birth" />
        <SelectGroup label="i'm available for" />
        <InputGroup onChange={this.handleTypeChange} label="availability" />
      </WizardForm>
    )
  }
}
NewCoachInfo.propTypes = {

}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCoachInfo);
