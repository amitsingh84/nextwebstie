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



     
export async function getServerSideProps(){
        const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/search"
      const res=await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=SujitPandeyji&type=video&key=AIzaSyAxv-0Y_5Q9P_Xb46DbyIEH2xuvQvnoLt0')
      console.log(res)
        const data=await res.json()
        return{
          props:{
      data
          }
        }
      }

export default function DetailData({data}) {
    const router = useRouter()
    
    console.log(data);
    return <div>
        
    <Swiper
    modules={[Navigation, Pagination, Scrollbar]}
    slidesPerView={5.1}
    navigation={true}
    spaceBetween={7}
    loop={true}
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
        slidesPerView: 5.2,
        spaceBetween: 10
      }
    }}
    
  >
      {/* {data.items.map((item,key)=>{
      const {id,snippet={}}=item
      const {title,thumbnails={}}=snippet;
      const {channelTitle,resourceId={}}=snippet;
      const {videoId ={}}=resourceId
      const {medium ={}}=thumbnails
      const url=medium.url
      console.log(url);
      
      console.log(main_url);
      console.log(id);
   return(
    <SwiperSlide key={key}>
        <div className='define_height'>
      <div onClick={() => router.push(`${main_url}`)}><Image alt="testing" src={medium.url} height={medium.height} width={medium.width} className='defint_img_height cursor-pointer' />
        
          
      </div>
<div> {title}</div>
    </div>
    </SwiperSlide>
    
    



    )
})} */}
  </Swiper> 
  

    </div>;
}



// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=SujitPandeyji&type=video&key=AIzaSyAxv-0Y_5Q9P_Xb46DbyIEH2xuvQvnoLt0