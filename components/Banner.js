import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return <div className='relative h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[550px]'>
      <Image src='https://links.papareact.com/0fm' layout='fill' objectFit='
      cover' />
      <div className='absolute w-full top-1/2 -translate-y-1/2 text-center'>
          <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>
          <button className='text-purple-500 font-bold bg-white px-8 py-3 mt-2 rounded-full shadow-md hover:shadow-lg active:scale-90 transition-all duration-150'>I'm flexible</button>
      </div>
  </div>;
}
