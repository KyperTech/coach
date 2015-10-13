import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import './Icons.scss'

class Phone extends Component {

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
        <svg width="32px" height="30px" viewBox="0 0 32 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Main" sketch:type="MSArtboardGroup" transform="translate(-930.000000, -1411.000000)" fill="#696773">
                    <g id="Group-Copy" sketch:type="MSLayerGroup" transform="translate(128.000000, 1270.000000)">
                        <g id="Group" transform="translate(287.000000, 15.000000)" sketch:type="MSShapeGroup">
                            <g id="Thomas-Grant-+-Love-Coach-+-8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2">
                                <g id="8-+-Oval-2-+-Triangle-1-+-Rectangle-10-+-Triangle-2" transform="translate(442.000000, 125.500000)">
                                    <path d="M103.874167,22.0441462 C102.81953,21.0914665 100.866568,20.6926404 98.778521,19.5251093 C96.6882221,18.3572565 96.5042475,18.7255273 96.1359766,18.9095019 C95.7651327,19.0934765 94.1743313,21.5780986 93.4094858,22.3722128 C92.9234969,22.878143 92.2245864,22.8035239 91.956987,22.7227938 C85.9498301,20.7675811 81.1446192,13.1927804 81.1446192,13.1927804 C80.589479,12.640535 81.1446192,12.0310387 81.1446192,12.0310387 C82.2082626,10.9442376 82.6797779,10.4495647 83.2924905,9.63261448 C84.3995545,8.15438494 81.2044431,2.69078938 80.7763483,1.52293659 C80.3447156,0.355405423 78.0096533,0.786716522 78.0096533,0.786716522 C73.4440596,1.48273235 72.3395687,7.52719878 73.3404935,9.87995098 C79.4602223,24.2971919 93.9636611,33.8136966 102.083631,27.9528831 C102.08331,27.9532047 104.403255,26.7036569 104.403255,23.3097757 C104.403255,22.8942247 104.090305,22.239378 103.874167,22.0441462 Z" id="Shape" transform="translate(88.701628, 15.208846) scale(-1, 1) translate(-88.701628, -15.208846) "></path>
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

Phone.propTypes = {
  style: PropTypes.string
}

Phone.defaultProps = {
  style: 'dark'
}

export default Phone;
