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
    this.handlePlusClick = this.handlePlusClick.bind(this);

    this.state = {
      groups: [{
        timeRange: ['9 am', '4 pm'],
        days: ['monday', 'friday']
      }]
    }
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

  handlePlusClick() {
    this.setState((previousState) => {
      previousState.groups.push({
        timeRange: ['9 am', '4 pm'],
        days: []
      });
      return previousState;
    });

  }

  render() {
    let groups = this.state.groups.map((group, i) => {
      return (
        <div key={ i } className="AvailabilityGroup-Group">
          <TimeSlider />
          <DayPicker onChange={ this.handleDayChange } />
        </div>
      );
    });

    return (
      <div className="AvailabilityGroup">
        <span className="AvailabilityGroup-Label">
          { this.props.label }
        </span>
        { groups }
        <div className="AvailabilityGroup-Plus">
          <a href="#" onClick={ this.handlePlusClick }>
            <Plus />
          </a>
        </div>
      </div>
    )
  }
}
AvailabilityGroup.propTypes = {
}
export default AvailabilityGroup;
