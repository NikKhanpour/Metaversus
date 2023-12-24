/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function FounderComment() {
   return (
      <div className='container mx-auto px-8 lg:px-24 mt-52'>
         <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-8'>
            <div className='lg:w-[370px] lg:h-[610px] border border-opacity-50 backdrop-blur-sm border-white rounded-[32px] p-[30px] lg:pt-[163px]'>
               <h3 className='text-[32px] font-bold -tracking-[0.64px] text-white'>
                  Samantha
               </h3>
               <p className='text-[18px] font-normal -tracking-[0.36px] text-white pt-2'>
                  Founder Metaversus
               </p>
               <p className='pt-6 text-2xl font-normal -tracking-[0.48px] leading-[45.6px] text-white'>
                  “With the development of today's technology,
                  metaverse is very useful for today's work, or
                  can be called web 3.0. by using metaverse you can use it as anything”
               </p>
            </div>
            <div className='relative h-[400px] lg:w-[768px] lg:h-[610px] rounded-[40px] mt-6 lg:mt-0'>
               <img className='w-full h-full object-cover rounded-[40px]' src="/planet-09.png" alt="planet" />
               <img className='absolute top-[10%] -left-[12%] w-[155px] h-[155px] -rotate-[20deg] ' src="/stamp.png" alt="stamp" />
            </div>
         </div>
      </div>
   )
}

export default FounderComment