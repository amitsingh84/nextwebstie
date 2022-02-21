import { useRouter } from 'next/router';
import React from 'react';
import DetailData from '../components/DetailData';

export default function comedian() {
  const router=useRouter()
  const { postId } = router.query
  console.log(postId);
  return <div className='contaoner m-auto'>
      comedian page
      <DetailData/>
  </div>;
}
