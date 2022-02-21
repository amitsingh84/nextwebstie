import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/Header';
import StandUpData from '../../components/StandUpData';

import personData from '../api/comedianDataApi';
const YOUTUBE_PLAYLIST_ITEMS_API="https://www.googleapis.com/youtube/v3/playlistItems"
export async function getServerSideProps(){
  const res=await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl&key=${process.env.API_KEY}`)
  console.log(res)
  const data=await res.json()
  return{
    props:{
data
    }
  }
}

const standup = ({data}) => {
    console.log(data);
    console.log(personData);
    const router=useRouter()
    const title=router.query.standup
  return <div>
      <Header/>
     <StandUpData name={title} data={data}/>
     {/* {personData.map((item,key)=>{
      
   return(
   <div key={key}>testing{item.searchByName}<br/><br/><br/></div>
   )
  
  })}  */}
  </div>;
};

export default standup;
