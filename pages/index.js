import Head from 'next/head'
import Header from '../components/Header'
import SliderItem from '../components/slider/SliderItem'
import Content from '../components/Content'

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
export default function Home({data}) {
  console.log(data);
  console.log(process.env.API_KEY);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        {/* Header */}
         <Header/>
        
        {/* slider */}
        <SliderItem/>

       {/* content */}
        <Content/>
      
    </div>
  )
}
