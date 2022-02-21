import React from 'react';

import {getServerSideProps} from "../pages/index"
import ComedianSlider from './slider/ComedianSlider';
export default function Content() {
  return <div className='container m-auto'>
    
    {/* <getServerSideProps >text{data}</getServerSideProps> */}
    {/* {data.items.map((item)=>{
      console.log(item);
    })} */}
    <ComedianSlider/>
  </div>;
}
