import { useRouter } from 'next/router';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ComedianSlider = () => {
    const router = useRouter()
    return <div>
  
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1.1}
        navigation={true}
        spaceBetween={7}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 6.3,
            spaceBetween: 10
          }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><div className='define_height'>
          <div onClick={() => router.push('/stand-ups/Harshgujral')}><Image alt="testing" src="/comedian/Harsh-Gujral.jpeg" height={362} width={270} className='defint_img_height rounded-lg' />
            
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='define_height'>
          <div onClick={() => router.push('/stand-ups/power')}><Image alt="testing" src="/comedian/Harsh-Gujral.jpeg" height={362} width={270} className='defint_img_height rounded-lg' />
            
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='define_height'>
          <div onClick={() => router.push('/stand-ups/hai')}><Image alt="testing" src="/comedian/Harsh-Gujral.jpeg" height={362} width={270} className='defint_img_height bord rounded-lg' />
             
          </div>
        </div>
        </SwiperSlide>
  
  
  
      </Swiper>
    </div>;
};

export default ComedianSlider;
