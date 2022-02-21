import React from 'react';
import { useRouter } from 'next/router';
import requests from '../utils/request.js';


function Navs() {
 const router=useRouter();
  return <nav>

  <div className='flex px-4 text-sm md:text-lg whitespace-nowrap space-x-8 md:space-x-10 overflow-x-scroll md:px-1 scrollbar-hide'>
    
    {Object.entries(requests).map(([key,{title,url}])=>(
        <h2 key={key} className="cursor-pointer transition duration-700 transform hover:scale-124 hover:text-white  active:text-red-500 active:after:bg-red-500 hover:after:content-[''] hover:after:absolute after:w-full after:h-1 after:bg-white after:transition after:duration-700 after:-bottom-1 after:left-0 " onClick={()=>router.push(`/${url}`)}>{title}</h2>
        // <h2 key={key} className="cursor-pointer transition duration-700 transform hover:scale-124 hover:text-white  active:text-red-500 active:after:bg-red-500 hover:after:content-[''] hover:after:absolute after:w-full after:h-1 after:bg-white after:transition after:duration-700 after:-bottom-1 after:left-0 " onClick={()=>router.push(`/?gener=${key}`)}>{title}</h2>
    ))}
  </div>

  </nav>;
}

export default Navs;
