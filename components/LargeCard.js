import Image from 'next/image';
import React from 'react';

export default function LargeCard({img, title, description, btnText}) {
  return <div className='relative'>
      <div className='relative h-96 w-full'>
          <Image className="rounded-2xl" src={img} layout='fill' objectFit='cover' />
      </div>

      <div className='absolute top-1/4 pl-10 md:pl-16'>
          <h3 className='text-3xl font-semibold text-gray-800'>{title}</h3>
          <p className='my-3'>{description}</p>
          <button className="px-6 py-2 bg-slate-800 text-white text-sm rounded-lg cursor-pointer">{btnText}</button>
      </div>
  </div>;
}
