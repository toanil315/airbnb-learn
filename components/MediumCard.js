import Image from 'next/image';
import React from 'react';

export default function MediumCard({img, title}) {
  return <div className="cursor-pointer hover:scale-105 transition duration-200 ease-out">
      <div className='relative w-72 h-72'>
          <Image className='rounded-xl' src={img} layout='fill' />
      </div>
      <p className="text-2xl mt-3">{title}</p>
  </div>;
}
