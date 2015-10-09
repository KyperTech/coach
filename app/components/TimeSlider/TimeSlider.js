import React, { Component, PropTypes } from 'react';

import noUiSlider from 'nouislider';

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
    noUiSlider.create(this._slider, {
      start: [ 9, 16 ], // Handle start position
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
      var formattedTime;

      if (value === 0 || value === 24) {
        formattedTime = '12 am';
      } else if (value === 12) {
        formattedTime = '12 pm';
      } else if (value > 12) {
        formattedTime = `${value - 12} pm`;
      } else {
        formattedTime = `${value} am`;
      }

      if ( handle ) {
        this.setState({
          end: formattedTime
        });
      } else {
        this.setState({
          start: formattedTime
        });
      }
    })
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
}
export default TimeSlider;
