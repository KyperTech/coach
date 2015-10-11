import React, { Component, PropTypes } from 'react';

import './AvailabilityGroup.scss';

import TimeSlider from '../TimeSlider/TimeSlider';
import DayPicker from '../DayPicker/DayPicker';
import Plus from '../icons/Plus';

class AvailabilityGroup extends Component {

  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handlePlusClick = this.handlePlusClick.bind(this);

    this.state = {
      groups: [{
        timeRange: ['9 am', '4 pm'],
        days: ['monday', 'friday']
      }]
    }
  }

  handleDayChange(i, days) {
    this.setState((previousState) => {
      previousState.groups[i].days = days;
      return previousState;
    }, () => {
      this.props.onChange(this.state.groups);
    });
  }

  handleTimeChange(i, times) {
    this.setState((previousState) => {
      previousState.groups[i].timeRange = times;
      return previousState;
    }, () => {
      this.props.onChange(this.state.groups);
    });
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
          <TimeSlider timeRange={ group.timeRange } onChange={ this.handleTimeChange.bind(this, i) }/>
          <DayPicker selectedDays={ group.days } onChange={ this.handleDayChange.bind(this, i) } />
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
  label: PropTypes.string,
  onChange: PropTypes.func
}
export default AvailabilityGroup;
