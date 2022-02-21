import React from 'react';
import Navs from './Navs';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';



function Header() {
  return <div className='main_header sticky top-0 z-7 bg-[#0f0617]' >
    <div className='container m-auto'>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-5'>
        <div className='flex items-center'>
          <Image src="/logo.png" width={230} height={81} />
        </div>

        <div className='hiddenMobile col-span-3 py-4 flex items-center'>
          <Navs />
        </div>

        <div className='py-4 col-span-2 col-end-4 md:col-span-1 '>
          <SearchIcon className="h-8 w-8 text-white-500 ml-auto " />
        </div>
      </div >
    </div>
    <div className='md:hidden center_align'><Navs /></div>

  </div>;
}

export default Header;
