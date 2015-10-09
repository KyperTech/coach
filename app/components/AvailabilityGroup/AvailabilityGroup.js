import React, { Component, PropTypes } from 'react';

import './AvailabilityGroup.scss';

import TimeSlider from '../TimeSlider/TimeSlider';
import DayPicker from '../DayPicker/DayPicker';
import Plus from '../icons/Plus';

class AvailabilityGroup extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.props.onChange(e.target.value);
  }

  handleDayChange(days) {
    console.log(days);
  }

  selectDate(index) {
    console.log('index selected:', index);
  }

  render() {
    return (
      <div className="AvailabilityGroup">
        <span className="AvailabilityGroup-Label">
          { this.props.label }
        </span>
        <TimeSlider />
        <DayPicker onChange={ this.handleDayChange } />
        <div className="AvailabilityGroup-Plus">
          <Plus />
        </div>
      </div>
    )
  }
}
AvailabilityGroup.propTypes = {
}
export default AvailabilityGroup;
