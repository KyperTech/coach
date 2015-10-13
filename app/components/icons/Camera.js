import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Camera extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let classes = classnames('Icons', {
      light: this.props.style === 'light',
      dark: this.props.style === 'dark',
      primary: this.props.style === 'primary'
    });
    return (
      <span className={ classes } dangerouslySetInnerHTML={{__html: `
        <svg width="41px" height="30px" viewBox="0 0 41 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Main" sketch:type="MSArtboardGroup" transform="translate(-857.000000, -1411.000000)" fill="#696773">
                    <g id="Group-Copy" sketch:type="MSLayerGroup" transform="translate(128.000000, 1270.000000)">
                        <g id="Group" transform="translate(287.000000, 15.000000)" sketch:type="MSShapeGroup">
                            <g id="Thomas-Grant-+-Love-Coach-+-8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2">
                                <g id="8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2" transform="translate(442.000000, 125.500000)">
                                    <g id="Rectangle-10-+-Triangle-2" transform="translate(0.000000, 0.708846)">
                                        <rect id="Rectangle-10" x="0" y="0" width="30" height="29" rx="5"></rect>
                                        <path d="M41,0 L41,29 L32,14.5 L41,0 Z" id="Triangle-2"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
        `}} />
    )
  }
}

Camera.propTypes = {
  style: PropTypes.string
}

Camera.defaultProps = {
  style: 'dark'
}

export default Camera;
