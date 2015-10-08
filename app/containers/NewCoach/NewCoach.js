import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/auth';
// import './NewCoach.scss';

import InputGroup from '../../components/InputGroup/InputGroup';
import UploadGroup from '../../components/UploadGroup/UploadGroup';
import SelectGroup from '../../components/SelectGroup/SelectGroup';
import AvailabilityGroup from '../../components/AvailabilityGroup/AvailabilityGroup';
import WizardForm from '../../components/WizardForm/WizardForm';
import TextGroup from '../../components/TextGroup/TextGroup';
class NewCoach extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.state = {step: 1};
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
  nextStep() {
    console.log('nextStep called');
    this.state.step ++;
    console.log('stepped forward 1', this.state);
    this.setState({
      step: this.state.step
    });
  }
  previousStep() {
    console.log('previousStep called');
    this.state.step --;
    console.log('stepped back 1', this.state);
    this.setState({
      step: this.state.step
    });
  }
  render() {
    console.log('this.state:', this.state);
    switch(this.state.step) {
      case 1:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <UploadGroup onDrop={ this.handleImageUpload } label="profile" />
            <InputGroup onChange={ this.handleNameChange } label="name" />
            <InputGroup onChange={this.handleUsernameChange} label="username" />
            <InputGroup onChange={this.handleTypeChange} label="coach type" />
          </WizardForm>
        )
      case 2:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <InputGroup onChange={this.handleTypeChange} label="date of birth" />
            <SelectGroup label="i'm available for" />
            <AvailabilityGroup label="availability"/>
          </WizardForm>
        )
      case 3:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <TextGroup label="description of your services" />
          </WizardForm>
        )
      default:
        return (
          <WizardForm onNextClick={ this.nextStep } onPrevClick={this.previousStep}>
            <UploadGroup onDrop={ this.handleImageUpload } label="profile" />
            <InputGroup onChange={ this.handleNameChange } label="name" />
            <InputGroup onChange={this.handleUsernameChange} label="username" />
            <InputGroup onChange={this.handleTypeChange} label="coach type" />
          </WizardForm>
        )
    }
  }
}
NewCoach.propTypes = {

}
//Place state of redux store into props of component
function mapStateToProps(state) {
  return {
    account: state.account,
    router: state.router
  };
}
//Place action methods into props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCoach);
