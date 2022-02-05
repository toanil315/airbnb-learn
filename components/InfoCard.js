import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

export default function InfoCard({img, location, title, description, star, price, total, long, lat}) {
  return <div className="flex py-8 pl-2 border-b mb-4 cursor-pointer hover:opacity-80 hover:shadow-md transition duration-200 ease-out first:border-t">
      <div className='relative w-40 h-24 md:w-80 md:h-44 flex-shrink-0'>
          <Image className='rounded-xl' src={img} layout="fill" objectFit='cover' />
      </div>
      <div className='flex flex-col flex-grow px-4'>
        <p className='flex justify-between'>
            <span className='text-sm text-gray-400'>{location}</span>
            <HeartIcon className='h-6' />
        </p>
        <h3 className='inline-block text-xl font-semibold text-gray-800 pb-2'>{title}</h3>
        <p className='flex-grow text-sm text-gray-500 pb-4'>{description}</p>
        <div className='flex justify-between items-end'>
            <p className='flex items-center'>
                <StarIcon className='text-red-400 h-5 pr-1' />
                <span>{star}</span>
            </p>
            <div className='text-right'>
                <p className='text-lg text-gray-800 font-semibold pb-2'>{price}</p>
                <p>{total}</p>
            </div>
        </div>
      </div>
  </div>;
}
