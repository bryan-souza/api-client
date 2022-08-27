import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { Box } from '@mui/material';
import Image from 'next/image';
import civilizations from '../civilizations';

// TODO: Replace '<img />' calls with <Image />
// import Image from 'next/image';

function Carrossel() {

  const slides = civilizations.map(
    (item, index) =>
      <div key={index + 1}>
        <Image src={item.url} id={item.id} alt='slide' onClick={() => { console.log(item.id) }} key={index + 1} width={80} height={80} />
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