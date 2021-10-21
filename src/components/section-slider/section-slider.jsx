import React from 'react';

import SliderDisplay from '../slider-display/slider-display';
import SliderControls from '../slider-controls/slider-controls';

const SectionSlider = () => {
  return (
    <section>
      <h2 className="visually-hidden">Изображения товара</h2>
      <SliderDisplay />
      <SliderControls />
    </section>
  );
};

export default SectionSlider;