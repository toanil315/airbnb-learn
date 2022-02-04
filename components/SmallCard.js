import Image from 'next/image';
import React from 'react';

export default function SmallCard({img, location, distance}) {
  return <div className='flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
      <div className='relative w-16 h-16'>
        <Image src={img} layout='fill' className="rounded-xl" />
      </div>

      <div>
          <h3 className="font-semibold">{location}</h3>
          <span className='text-gray-500'>{distance}</span>
      </div>
  </div>;
}
