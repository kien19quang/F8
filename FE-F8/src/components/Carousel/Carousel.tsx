import * as React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Stack } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';

export interface CarouselProps {
  children: React.ReactNode;
}

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false
};

const Arrow = styled(Stack)(() => ({
  backgroundColor: '#fff',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
  color: '#4b4b4b',
  cursor: 'pointer',
  height: '32px',
  width: '32px',
  zIndex: '10',
  position: 'absolute',
  top: '50%'
}));

export default function Carousel({ children }: CarouselProps) {
  const slider = React.useRef<Slider>(null);

  const handleNextCarousel = () => {
    slider.current?.slickNext();
  };

  const handlePrevCarousel = () => {
    slider.current?.slickPrev();
  };

  return (
    <Box position="relative">
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
      <Arrow sx={{ transform: 'translate(-50%,-50%)', left: '0' }} onClick={handlePrevCarousel}>
        <KeyboardArrowLeftIcon />
      </Arrow>
      <Arrow sx={{ transform: 'translate(50%,-50%)', right: '0' }} onClick={handleNextCarousel}>
        <KeyboardArrowRightIcon />
      </Arrow>
    </Box>
  );
}
