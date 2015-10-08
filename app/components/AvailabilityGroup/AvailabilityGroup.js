import React, { Component, PropTypes } from 'react';

import './AvailabilityGroup.scss';
let selectedDates = [];
let dates = [
  {text: 'Mon', value: 'monday'},
  {text: 'Tues', value: 'tuesday'},
  {text: 'Wed', value: 'wednesday'},
  {text: 'Thurs', value: 'thursday'},
  {text: 'Fri', value: 'friday'},
  {text: 'Sat', value: 'saturday'},
  {text: 'Sun', value: 'sunday'}
];
class AvailabilityGroup extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.props.onChange(e.target.value);
  }
  selectDate(index) {
    console.log('index selected:', index);
  }
  render() {
    let datesList = dates.map((date, ind) => {
      return (<a className="AvailabilityGroup-Date" key={ind}>{date.text}</a>);
    });
    return (
      <div className="AvailabilityGroup">
        <span className="AvailabilityGroup-Label">
          { this.props.label }
        </span>
        <div className="AvailabilityGroup-Timeline">
          __________________________
        </div>
        <div className="AvailabilityGroup-Dates">
          { datesList }
        </div>
      </div>
    )
  }
}
AvailabilityGroup.propTypes = {
}
export default AvailabilityGroup;
