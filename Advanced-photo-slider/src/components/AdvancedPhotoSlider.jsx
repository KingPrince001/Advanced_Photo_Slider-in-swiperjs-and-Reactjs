import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { css } from '@emotion/react';
import { Autoplay, Pagination, Navigation, EffectFade, EffectCube, EffectFlip, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles for effects
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';

const useStyles = css({
  slider: {
    width: '100vw',
    height: '100vh',
    '& .swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
});

const effects = ['fade', 'cube', 'flip', 'coverflow'];

const AdvancedPhotoSlider = ({ images }) => {
  const classes = useStyles;
  const [currentEffect, setCurrentEffect] = useState('fade');

  useEffect(() => {
    const effectInterval = setInterval(() => {
      setCurrentEffect(prevEffect => {
        const currentIndex = effects.indexOf(prevEffect);
        const nextIndex = (currentIndex + 1) % effects.length;
        return effects[nextIndex];
      });
    }, 5000); // Change effect every 5 seconds

    return () => clearInterval(effectInterval);
  }, []);

  return (
    <Swiper
      className={classes}
      modules={[Autoplay, Pagination, Navigation, EffectFade, EffectCube, EffectFlip, EffectCoverflow]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation={true}
      effect={currentEffect}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AdvancedPhotoSlider;
