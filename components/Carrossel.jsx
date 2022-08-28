import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { useContext } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

import civilizations from '../civilizations';
import { context } from '../components/CivContext';

function Carrossel() {
  const { setCivId } = useContext(context);

  const slides = civilizations.map(
    (item, index) =>
      <div key={index + 1}>
        <Image
          id={item.id}
          key={index + 1}
          src={item.url}
          alt='slide'
          onClick={() => setCivId(item.id)}
          width={80}
          height={80}
        />
      </div>
  );

  return (
    <Box bgcolor={'#c4c4c4'} p={1}>
      <Swiper modules={[Virtual]} spaceBetween={5} slidesPerView={16} virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent.key} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carrossel;