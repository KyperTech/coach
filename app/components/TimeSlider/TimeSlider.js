import React, { Component, PropTypes } from 'react';

import noUiSlider from 'nouislider';
import moment from 'moment';

import 'nouislider/distribute/nouislider.min.css';
import './TimeSlider.scss';

class TimeSlider extends Component {

  constructor(props) {
    super(props);
    this._slider = {};
    this.state = {
      start: 5,
      end: 20
    }
  }


  componentDidMount() {
    let startTime = moment(this.props.timeRange[0], ['h a']).format('H');
    let endTime = moment(this.props.timeRange[1], ['h a']).format('H');
    noUiSlider.create(this._slider, {
      start: [ startTime, endTime ], // Handle start position
    	step: 1, // Slider moves in increments of '10'
    	margin: 1, // Handles must be more than '20' apart
    	connect: true, // Display a colored bar between the handles
    	direction: 'ltr', // Put '0' at the bottom of the slider
    	orientation: 'horizontal', // Orient the slider vertically
    	behaviour: 'tap-drag', // Move handle on tap, bar is draggable
    	range: { // Slider can select '0' to '100'
    		'min': 0,
    		'max': 24
    	}
    });

    this._slider.noUiSlider.on('update', (values, handle) => {
      var value = Math.round(values[handle]);
      var formattedTime = moment(value, ['H']).format('h a');

      if ( handle ) {
        this.setState({
          end: formattedTime
        }, () => {
          this.updateParent();
        });
      } else {
        this.setState({
          start: formattedTime
        }, () => {
          this.updateParent();
        });
      }
    })
  }

  updateParent() {
    this.props.onChange([this.state.start, this.state.end]);
  }

  componentWillUnmount() {
    this._slider.noUiSlider.destroy();
  }


  render() {
    return (
      <div className="TimeSlider">
        <div ref={ (c) => this._slider = c } className="TimeSlider-Timeline">
        </div>
        <p className="TimeSlider-Times">{ this.state.start } - { this.state.end }</p>
      </div>
    )
  }
}
TimeSlider.propTypes = {
  timeRange: PropTypes.array,
  onChange: PropTypes.func
}
export default TimeSlider;
