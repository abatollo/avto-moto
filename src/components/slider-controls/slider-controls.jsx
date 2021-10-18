import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';

import Marpekh1ThumbnailJPG from '../../img/marpekh-1-thumbnail.jpg';
import Marpekh1ThumbnailWEBP from '../../img/marpekh-1-thumbnail.webp';
import Marpekh1ThumbnailAVIF from '../../img/marpekh-1-thumbnail.avif';

import Marpekh1ThumbnailX2JPG from '../../img/marpekh-1-thumbnail@2x.jpg';
import Marpekh1ThumbnailX2WEBP from '../../img/marpekh-1-thumbnail@2x.webp';
import Marpekh1ThumbnailX2AVIF from '../../img/marpekh-1-thumbnail@2x.avif';

import Marpekh1ThumbnailX3JPG from '../../img/marpekh-1-thumbnail@3x.jpg';
import Marpekh1ThumbnailX3WEBP from '../../img/marpekh-1-thumbnail@3x.webp';
import Marpekh1ThumbnailX3AVIF from '../../img/marpekh-1-thumbnail@3x.avif';

import Marpekh2ThumbnailJPG from '../../img/marpekh-2-thumbnail.jpg';
import Marpekh2ThumbnailWEBP from '../../img/marpekh-2-thumbnail.webp';
import Marpekh2ThumbnailAVIF from '../../img/marpekh-2-thumbnail.avif';

import Marpekh2ThumbnailX2JPG from '../../img/marpekh-2-thumbnail@2x.jpg';
import Marpekh2ThumbnailX2WEBP from '../../img/marpekh-2-thumbnail@2x.webp';
import Marpekh2ThumbnailX2AVIF from '../../img/marpekh-2-thumbnail@2x.avif';

import Marpekh2ThumbnailX3JPG from '../../img/marpekh-2-thumbnail@3x.jpg';
import Marpekh2ThumbnailX3WEBP from '../../img/marpekh-2-thumbnail@3x.webp';
import Marpekh2ThumbnailX3AVIF from '../../img/marpekh-2-thumbnail@3x.avif';

import Marpekh3ThumbnailJPG from '../../img/marpekh-3-thumbnail.jpg';
import Marpekh3ThumbnailWEBP from '../../img/marpekh-3-thumbnail.webp';
import Marpekh3ThumbnailAVIF from '../../img/marpekh-3-thumbnail.avif';

import Marpekh3ThumbnailX2JPG from '../../img/marpekh-3-thumbnail@2x.jpg';
import Marpekh3ThumbnailX2WEBP from '../../img/marpekh-3-thumbnail@2x.webp';
import Marpekh3ThumbnailX2AVIF from '../../img/marpekh-3-thumbnail@2x.avif';

import Marpekh3ThumbnailX3JPG from '../../img/marpekh-3-thumbnail@3x.jpg';
import Marpekh3ThumbnailX3WEBP from '../../img/marpekh-3-thumbnail@3x.webp';
import Marpekh3ThumbnailX3AVIF from '../../img/marpekh-3-thumbnail@3x.avif';

const SliderControls = ({ currentSlide, setCurrentSlide }) => {
  const prevSlideButtonClickHandler = () => {
    setCurrentSlide(--currentSlide);
  };

  const nextSlideButtonClickHandler = () => {
    setCurrentSlide(++currentSlide);
  };

  return (
    <div className="slider_controls">
      <button 
        className="slider_controls_btn slider_controls_btn--prev"
        type="button" 
        onClick={prevSlideButtonClickHandler}
      >
        Назад
      </button>
      <picture>
        <source width="128" height="80" srcSet={`${Marpekh1ThumbnailAVIF} 1x, ${Marpekh1ThumbnailX2AVIF} 2x, ${Marpekh1ThumbnailX3AVIF} 3x`} type="image/avif" />
        <source width="128" height="80" srcSet={`${Marpekh1ThumbnailWEBP} 1x, ${Marpekh1ThumbnailX2WEBP} 2x, ${Marpekh1ThumbnailX3WEBP} 3x`} type="image/webp" />
        <img width="128" height="80" srcSet={`${Marpekh1ThumbnailJPG} 1x, ${Marpekh1ThumbnailX2JPG} 2x, ${Marpekh1ThumbnailX3JPG} 3x`} src={Marpekh1ThumbnailJPG} alt="Чёрный роадстер сфотографироован под углом" />
      </picture>
      <picture>
        <source width="128" height="80" srcSet={`${Marpekh2ThumbnailAVIF} 1x, ${Marpekh2ThumbnailX2AVIF} 2x, ${Marpekh2ThumbnailX3AVIF} 3x`} type="image/avif" />
        <source width="128" height="80" srcSet={`${Marpekh2ThumbnailWEBP} 1x, ${Marpekh2ThumbnailX2WEBP} 2x, ${Marpekh2ThumbnailX3WEBP} 3x`} type="image/webp" />
        <img width="128" height="80" srcSet={`${Marpekh2ThumbnailJPG} 1x, ${Marpekh2ThumbnailX2JPG} 2x, ${Marpekh2ThumbnailX3JPG} 3x`} src={Marpekh2ThumbnailJPG} alt="Кожаный салон чёрного роадстера" />
      </picture>
      <picture>
        <source width="128" height="80" srcSet={`${Marpekh3ThumbnailAVIF} 1x, ${Marpekh3ThumbnailX2AVIF} 2x, ${Marpekh3ThumbnailX3AVIF} 3x`} type="image/avif" />
        <source width="128" height="80" srcSet={`${Marpekh3ThumbnailWEBP} 1x, ${Marpekh3ThumbnailX2WEBP} 2x, ${Marpekh3ThumbnailX3WEBP} 3x`} type="image/webp" />
        <img width="128" height="80" srcSet={`${Marpekh3ThumbnailJPG} 1x, ${Marpekh3ThumbnailX2JPG} 2x, ${Marpekh3ThumbnailX3JPG} 3x`} src={Marpekh3ThumbnailJPG} alt="Приборная панель чёрного роадстера" />
      </picture>
      <button 
        className="slider_controls_btn slider_controls_btn--next"
        type="button" 
        onClick={nextSlideButtonClickHandler}
      >
        Вперёд
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentSlide: state.currentSlide
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentSlide(currentSlide) {
    dispatch(ActionCreator.setCurrentSlide(currentSlide));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderControls);
