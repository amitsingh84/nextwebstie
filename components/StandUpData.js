import React from 'react';
import Image from 'next/image';

// export async function getStaticPaths() {
  
//     return {
//       paths: [
//         { params: {  } }
//       ],
      
//     };
//   }

const StandUpData = ({name,data}) => {
    
     console.log(data);
    return <div>

        <div className='container m-auto'>
        <div className=" grid grid-cols-3 gap-4">
            <div><Image src="/comedian/Harsh-Gujral.jpeg" width={296} height={397} /></div>

            <div className='col-span-2'>
                <h1>{name}</h1>
                <p>Subscribers : 1.29 M</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>

                    <span>Share</span>
                </p>
                <p>Harsh Gujral was born in Kanpur and is a Delhi-based stand-up comedian. He started his comedy career in 2015 while working a 9 to 5 job as a data engineer, doing his job during the day and hitting open mics at night. He has this raw energy of the boy- next- door on stage which resonates with the audience amazingly and establishes a great camaraderie between him and the audience. No wonder his crowd work is so enjoyable and loved by masses! He also does observational humour along with telling stories about his childhood in such a way which is related by many. He did stand-up for 3 years before releasing his first video on YouTube on 5th July 2019 titled ‘Indian Reality Shows – Stand Up Comedy ft. Harsh Gujral’ which gained over 13 million views. His most-watched video till date is titled ‘Shadi Ki Rasmein – Standup Comedy ft. Harsh Gujral’ with over 16 million views. He recently crossed over 1 million YouTube subscribers with the release of his crowd work video with Anubhav Singh Bassi titled ‘Harsh & Bassi Unleashed | Crowd Work | Standup Comedy’ which has over 15 million views. His Instagram game is also not lagging behind where he has over 530K followers. He constantly posts funny reels on Instagram sometimes even including his parents in these videos which makes them even more hilarious and wholesome.</p>
                <p>Social Details</p>
                <p><Image src="/socialicon/facebook.png" width={30} height={30} />
                    <Image src="/socialicon/instagram.png" width={30} height={30} />
                    <Image src="/socialicon/twitter.png" width={30} height={30} />
                    <Image src="/socialicon/youtube.png" width={30} height={30} />


                </p>
            </div>
        </div>
</div>
        <div>
            <h3>Standup Comedy by Harsh Gujral</h3>
            <div className='sm:grid md:grid-cols-4'>

            {data.items.map((item,key)=>{
      const {id,snippet={}}=item
      const {title}=snippet;
   return(
   <div key={key}>{title}<br/><br/><br/></div>
   )
  
  })} 
               
            </div>8
        </div>
    </div>
};

export default StandUpData;
