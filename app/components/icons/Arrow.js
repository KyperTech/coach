import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Arrow extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    let classes = classnames('Icons', {
      light: this.props.style === 'light',
      dark: this.props.style === 'dark'
    });
    return (
      <span className={ classes } dangerouslySetInnerHTML={{__html: `<svg width="52px" height="53px" viewBox="0 0 52 53" version="1.1">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
              <g id="Coach-Setup-Page-3" sketch:type="MSArtboardGroup" transform="translate(-957.000000, -485.000000)" stroke="#FFFFFF" stroke-width="6">
                  <g id="Line-+-Line-Copy-+-Line-Copy-2-+-Oval-6" sketch:type="MSLayerGroup" transform="translate(960.000000, 488.500000)">
                      <g id="Line-+-Line-Copy-+-Line-Copy-2" transform="translate(11.500000, 11.129032)" sketch:type="MSShapeGroup" stroke-linecap="square">
                          <path d="M0.370967742,11.8709677 L21.1980886,11.8709677" id="Line"></path>
                          <path d="M10.3870968,0 L23,11.8709677" id="Line-Copy"></path>
                          <path d="M10.3870968,11.8709677 L23,23.7419355" id="Line-Copy-2" transform="translate(16.693548, 17.806452) scale(1, -1) translate(-16.693548, -17.806452) "></path>
                      </g>
                      <circle id="Oval-6" sketch:type="MSShapeGroup" cx="23" cy="23" r="23"></circle>
                  </g>
              </g>
          </g>
      </svg>`}} />
    )
  }
}

Arrow.PropTypes = {
  style: PropTypes.string
}

export default Arrow;
