import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Check extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span dangerouslySetInnerHTML={{__html: `
        <svg width="52px" height="53px" viewBox="0 0 52 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Coach-Setup-Page-4" sketch:type="MSArtboardGroup" transform="translate(-1048.000000, -485.000000)" stroke="#47E5BC" stroke-width="6">
                    <g id="Line-+-Line-Copy-+-Line-Copy-2-+-Oval-6" sketch:type="MSLayerGroup" transform="translate(1051.000000, 488.500000)">
                        <g id="Line-+-Line-Copy-+-Line-Copy-2" transform="translate(22.939340, 23.068372) rotate(-315.000000) translate(-22.939340, -23.068372) translate(11.939340, 11.068372)" stroke-linecap="square" sketch:type="MSShapeGroup">
                            <g id="Line-Copy-+-Line-Copy-2" transform="translate(11.292893, 11.707107) rotate(-330.000000) translate(-11.292893, -11.707107) translate(4.792893, 2.207107)">
                                <path d="M0.553857442,0.424825191 L12,11.8709677" id="Line-Copy"></path>
                                <path d="M5.91196765,12.5248709 L12,18.6129032" id="Line-Copy-2" transform="translate(8.887097, 15.241935) scale(1, -1) translate(-8.887097, -15.241935) "></path>
                            </g>
                        </g>
                        <circle id="Oval-6" sketch:type="MSShapeGroup" cx="23" cy="23" r="23"></circle>
                    </g>
                </g>
            </g>
        </svg>
        `}} />
    )
  }
}

Check.propTypes = {
}

Check.defaultProps = {
}

export default Check;
