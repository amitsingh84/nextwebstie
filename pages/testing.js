import React from 'react';
import DetailSlider from '../components/slider/DetailSlider';

const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/playlistItems"
export async function getServerSideProps(){
  const res=await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLFsfg2xP7cbLygIgGT0vaJBBQ550rmzfR&key=${process.env.API_KEY}`)
  // const res=await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl&key=${process.env.API_KEY}`)
  console.log(res)
  const data=await res.json()
  return{
    props:{
data
    }
  }
}
export default function testing({data}) {
  console.log(data);

  
  return <div>
    
    {data.items.map((item,key)=>{
      const {id,snippet={}}=item
      const {title}=snippet;
   return(
   <p key={key}>{title}<br/><br/><br/></p>
   )
  
  })} 
  <DetailSlider data={data}/>
  </div>;
}
