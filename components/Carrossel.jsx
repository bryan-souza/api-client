import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { Box } from '@mui/material';

// TODO: Replace '<img />' calls with <Image />
// import Image from 'next/image';

function Carrossel() {

  const ArrayTeste = [
    { url: 'https://picsum.photos/200/300/?random', id: '1' },
    { url: 'https://images.unsplash.com/photo-1659535824233-966cc8de61a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80', id: '2' },
    { url: 'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', id: '3' },
  ];

  const slides = ArrayTeste.map(
    (item, index) =>
      <div key={index + 1}>
        <img src={item.url} id={item.id} alt='slide' key={index + 1} />
      </div>
  );

  return (
    <Box bgcolor={'#c4c4c4'} p={1}>
      <Swiper modules={[Virtual]} spaceBetween={5} slidesPerView={10} virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carrossel;