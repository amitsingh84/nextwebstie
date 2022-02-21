import React from 'react';

import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function SliderItem() {
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
          slidesPerView: 1.3,
          spaceBetween: 10
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className='define_height'>
        <div onClick={() => router.push('/testing')}><Image alt="testing" src="/slider/Mechanical.jpeg" height={740} width={1700} className='defint_img_height' />
          <div className='not_show absolute bottom-14 left-10'>
            <h3 className='font-normal text-white text-3xl'>Stand On comdey</h3>
            <p>lorem </p>
            <button className="play_button rounded outline-none border border-white py-1 px-4 pl-8 mt-1 relative hover:bg-white hover:text-black hover:before:border-l-black">
              Play
            </button>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className='define_height'>
        <div onClick={() => router.push('/testing')}><Image alt="testing" src="/slider/Mechanical.jpeg" height={740} width={1700} className='defint_img_height' />
          <div className='not_show absolute bottom-14 left-10'>
            <h3 className='font-normal text-white text-3xl'>Stand On comdey</h3>
            <p>lorem </p>
            <button className="play_button rounded outline-none border border-white py-1 px-4 pl-8 mt-1 relative hover:bg-white hover:text-black hover:before:border-l-black">
              Play
            </button>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className='define_height'>
        <div onClick={() => router.push('/testing')}><Image alt="testing" src="/slider/Mechanical.jpeg" height={740} width={1700} className='defint_img_height' />
          <div className='not_show absolute bottom-14 left-10'>
            <h3 className='font-medium tracking-wide text-white text-3xl'>Stand On comdey</h3>
            <p>lorem </p>
            <button className="play_button rounded outline-none border border-white py-1 px-4 pl-8 mt-1 relative hover:bg-white hover:text-black hover:before:border-l-black">
              Play
            </button>
          </div>
        </div>
      </div>
      </SwiperSlide>



    </Swiper>
  </div>;
}

export default SliderItem;
