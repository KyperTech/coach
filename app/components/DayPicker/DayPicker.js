import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';
import _ from 'lodash';
import './DayPicker.scss';

let selectedDates = [];
let dates = [
  {text: 'Mon', value: 'monday', selected: false},
  {text: 'Tues', value: 'tuesday', selected: false},
  {text: 'Wed', value: 'wednesday', selected: false},
  {text: 'Thurs', value: 'thursday', selected: false},
  {text: 'Fri', value: 'friday', selected: false},
  {text: 'Sat', value: 'saturday', selected: false},
  {text: 'Sun', value: 'sunday', selected: false}
];
class DayPicker extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dates: dates
    };
  }

  handleClick(ind) {
    this.setState((previousState) => {
      previousState.dates[ind]['selected'] = !previousState.dates[ind]['selected'];
      return previousState;
    }, () => {
      this.props.onChange( _.pluck(_.where(this.state.dates, { selected: true }), 'value'));
    });
  }

  getDays() {
    let days = _.pluck(_.where(this.state.dates, { selected: true }), 'value');
    return days;
  }

  render() {
    let datesList = this.state.dates.map((date, ind) => {
      var classes = classnames(['DayPicker-Date', {
        selected: date.selected
      }]);
      return (<a className={ classes } key={ind} onClick={ this.handleClick.bind(this, ind) } href="#">{date.text}</a>);
    });
    return (
      <div className="DayPicker">
        { datesList }
      </div>
    )
  }
}

DayPicker.propTypes = {
  onChange: PropTypes.func
};

export default DayPicker;
