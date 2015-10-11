import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Chat extends Component {

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
        <svg width="36px" height="28px" viewBox="0 0 36 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Main" sketch:type="MSArtboardGroup" transform="translate(-994.000000, -1413.000000)">
                    <g id="Group-Copy" sketch:type="MSLayerGroup" transform="translate(128.000000, 1270.000000)">
                        <g id="Group" transform="translate(287.000000, 15.000000)" sketch:type="MSShapeGroup">
                            <g id="Thomas-Grant-+-Love-Coach-+-8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2">
                                <g id="8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2" transform="translate(442.000000, 125.500000)">
                                    <g id="Oval-2-+-Triangle-1-Copy-2-+-Oval-2-+-Triangle-1-Copy" transform="translate(136.000000, 2.500000)">
                                        <g id="Oval-2-+-Triangle-1-Copy-2" transform="translate(14.281818, 11.798745) scale(-1, 1) translate(-14.281818, -11.798745) translate(0.781818, 0.405888)" fill="#363946">
                                            <ellipse id="Oval-2" cx="12.6" cy="10.9589768" rx="12.6" ry="10.9589768"></ellipse>
                                            <path d="M26.2545455,20.0704633 L19.3818182,19.6200031 L23.8675052,14.3880309 L26.2545455,20.0704633 L26.2545455,20.0704633 Z" id="Triangle-1"></path>
                                        </g>
                                        <g id="Oval-2-+-Triangle-1-Copy" transform="translate(10.218182, 6.088320)" fill="#696773">
                                            <ellipse id="Oval-2" cx="12.6" cy="10.9589768" rx="12.6" ry="10.9589768"></ellipse>
                                            <path d="M26.2545455,20.0704633 L19.3818182,19.6200031 L23.8675052,14.3880309 L26.2545455,20.0704633 L26.2545455,20.0704633 Z" id="Triangle-1"></path>
                                        </g>
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

Chat.propTypes = {
  style: PropTypes.string
}

Chat.defaultProps = {
  style: 'dark'
}

export default Chat;
