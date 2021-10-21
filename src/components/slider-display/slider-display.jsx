import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Marpekh1FullJPG from '../../img/marpekh-1-full.jpg';
import Marpekh1FullWEBP from '../../img/marpekh-1-full.webp';
import Marpekh1FullAVIF from '../../img/marpekh-1-full.avif';

import Marpekh1FullX2JPG from '../../img/marpekh-1-full@2x.jpg';
import Marpekh1FullX2WEBP from '../../img/marpekh-1-full@2x.webp';
import Marpekh1FullX2AVIF from '../../img/marpekh-1-full@2x.avif';

import Marpekh1FullX3JPG from '../../img/marpekh-1-full@3x.jpg';
import Marpekh1FullX3WEBP from '../../img/marpekh-1-full@3x.webp';
import Marpekh1FullX3AVIF from '../../img/marpekh-1-full@3x.avif';

import Marpekh2FullJPG from '../../img/marpekh-2-full.jpg';
import Marpekh2FullWEBP from '../../img/marpekh-2-full.webp';
import Marpekh2FullAVIF from '../../img/marpekh-2-full.avif';

import Marpekh2FullX2JPG from '../../img/marpekh-2-full@2x.jpg';
import Marpekh2FullX2WEBP from '../../img/marpekh-2-full@2x.webp';
import Marpekh2FullX2AVIF from '../../img/marpekh-2-full@2x.avif';

import Marpekh2FullX3JPG from '../../img/marpekh-2-full@3x.jpg';
import Marpekh2FullX3WEBP from '../../img/marpekh-2-full@3x.webp';
import Marpekh2FullX3AVIF from '../../img/marpekh-2-full@3x.avif';

import Marpekh3FullJPG from '../../img/marpekh-3-full.jpg';
import Marpekh3FullWEBP from '../../img/marpekh-3-full.webp';
import Marpekh3FullAVIF from '../../img/marpekh-3-full.avif';

import Marpekh3FullX2JPG from '../../img/marpekh-3-full@2x.jpg';
import Marpekh3FullX2WEBP from '../../img/marpekh-3-full@2x.webp';
import Marpekh3FullX2AVIF from '../../img/marpekh-3-full@2x.avif';

import Marpekh3FullX3JPG from '../../img/marpekh-3-full@3x.jpg';
import Marpekh3FullX3WEBP from '../../img/marpekh-3-full@3x.webp';
import Marpekh3FullX3AVIF from '../../img/marpekh-3-full@3x.avif';

const SliderDisplay = ({ currentSlide }) => {
  return (
    <div className="slider-display">
      {currentSlide === 1 &&
        <picture>
          <source srcSet={`${Marpekh1FullAVIF} 1x, ${Marpekh1FullX2AVIF} 2x, ${Marpekh1FullX3AVIF} 3x`} type="image/avif" />
          <source srcSet={`${Marpekh1FullWEBP} 1x, ${Marpekh1FullX2WEBP} 2x, ${Marpekh1FullX3WEBP} 3x`} type="image/webp" />
          <img width="600" height="375" srcSet={`${Marpekh1FullJPG} 1x, ${Marpekh1FullX2JPG} 2x, ${Marpekh1FullX3JPG} 3x`} src={Marpekh1FullJPG} alt="Чёрный роадстер сфотографироован под углом" />
        </picture>}
        {currentSlide === 2 &&
        <picture>
          <source srcSet={`${Marpekh2FullAVIF} 1x, ${Marpekh2FullX2AVIF} 2x, ${Marpekh2FullX3AVIF} 3x`} type="image/avif" />
          <source srcSet={`${Marpekh2FullWEBP} 1x, ${Marpekh2FullX2WEBP} 2x, ${Marpekh2FullX3WEBP} 3x`} type="image/webp" />
          <img width="600" height="375" srcSet={`${Marpekh2FullJPG} 1x, ${Marpekh2FullX2JPG} 2x, ${Marpekh2FullX3JPG} 3x`} src={Marpekh2FullJPG} alt="Кожаный салон чёрного роадстера" />
        </picture>}
        {currentSlide === 3 &&
        <picture>
          <source srcSet={`${Marpekh3FullAVIF} 1x, ${Marpekh3FullX2AVIF} 2x, ${Marpekh3FullX3AVIF} 3x`} type="image/avif" />
          <source srcSet={`${Marpekh3FullWEBP} 1x, ${Marpekh3FullX2WEBP} 2x, ${Marpekh3FullX3WEBP} 3x`} type="image/webp" />
          <img width="600" height="375" srcSet={`${Marpekh3FullJPG} 1x, ${Marpekh3FullX2JPG} 2x, ${Marpekh3FullX3JPG} 3x`} src={Marpekh3FullJPG} alt="Приборная панель чёрного роадстера" />
        </picture>
      }
    </div>
  );
};

SliderDisplay.propTypes = {
  currentSlide: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return {
    currentSlide: state.currentSlide
  };
};

export default connect(mapStateToProps)(SliderDisplay);