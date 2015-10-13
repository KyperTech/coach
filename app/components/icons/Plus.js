import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Plus extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classes = classnames('Icons', {
      light: this.props.style === 'light',
      dark: this.props.style === 'dark'
    });
    return (
      <span className={ classes } dangerouslySetInnerHTML={{__html: `
        <svg width="52px" height="53px" viewBox="0 0 52 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Coach-Setup-Page-3" sketch:type="MSArtboardGroup" transform="translate(-694.000000, -682.000000)" stroke="#070707" stroke-width="6">
                    <g id="Rectangle-8-+-SORT-+-Triangle-1-Copy-6-+-Rectangle-32-+-form-field-+-form-field-copy-+-Line-+-Line-Copy-+-Line-Copy-2-+-Oval-6-Copy" sketch:type="MSLayerGroup" transform="translate(545.000000, 248.000000)">
                        <g id="Line-+-Line-Copy-+-Line-Copy-2-+-Oval-6-Copy" transform="translate(152.000000, 437.500000)" sketch:type="MSShapeGroup">
                            <g id="Line-+-Line-Copy-+-Line-Copy-2" transform="translate(11.500000, 12.129032)" stroke-linecap="square">
                                <path d="M0.370967742,10.8709677 L21.1980886,10.8709677" id="Line"></path>
                                <path d="M0.370967742,10.8709677 L21.1980886,10.8709677" id="Line" transform="translate(10.758065, 10.870968) rotate(90.000000) translate(-10.758065, -10.870968) "></path>
                            </g>
                            <circle id="Oval-6" cx="23" cy="23" r="23"></circle>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        `}} />
    )
  }
}

Plus.propTypes = {
  style: PropTypes.string
}

Plus.defaultProps = {
  style: 'dark'
}

export default Plus;
