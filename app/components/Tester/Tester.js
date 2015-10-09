import React, { Component, PropTypes } from 'react';

import jquery from 'jquery';
import Slider from 'jquery-ui/slider';

import './Tester.scss';

class Tester extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var $ = jquery;
    $(this._slider).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 20, 80 ]
    });
  }


  render() {
    return (
      <div className="Tester">
        <div ref={ (c) => this._slider = c } className="Tester-Timeline">
        </div>
      </div>
    )
  }
}
Tester.propTypes = {
}
export default Tester;
