'use client'

import { TypingText } from '@/components/CustomText'
import React from 'react'

function World() {
   return (
      <div className='flex flex-col items-center justify-center mt-52 px-8 lg:px-[280px]'>
         <TypingText text='| People on the world' />
         <h1 className='text-[48px] lg:text-[64px] font-bold text-center text-white -leading-[1.28px]'>
            Track friends around you and invite them to play together in the same world
         </h1>
         <div className='relative mt-12'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='w-full h-full' src="./map.png" alt="map" />
            <div className='absolute bottom-[20%] right-[9%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="./people-01.png" alt="people-1" />
            </div>
            <div className='absolute top-[10%] left-[10%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="./people-02.png" alt="people-1" />
            </div>
            <div className='absolute bottom-[44%] right-[46%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="./people-03.png" alt="people-1" />
            </div>
            <div className='hidden lg:inline absolute bottom-[30%] left-[15%] w-[180px] h-[120px] pt-1.5 rounded-[24px] bg-[#5d6680]'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='rounded-[24px] mx-auto w-[95%] h-[95%]' src="./map-img-1.png" alt="people-1" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-6 z-[3]' src="./ellipse-1.svg" alt="" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-9 z-[2]' src="./ellipse-2.svg" alt="" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-12 z-[1]' src="./ellipse-3.svg" alt="" />
               <p className='absolute bottom-[44px] left-[77px] text-white text-[10px]'>
                  +264 has joined
               </p>
               <p className='absolute bottom-4 left-6 text-white font-bold text-[14px]'>
                  The Upside Down
               </p>
            </div>
            <div className='hidden lg:inline absolute top-[10%] right-[20%] w-[180px] h-[120px] pt-1.5 rounded-[24px] bg-[#5d6680]'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='rounded-[24px] mx-auto w-[95%] h-[95%]' src="./map-img-2.png" alt="people-1" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-6 z-[3]' src="./ellipse-1.svg" alt="" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-9 z-[2]' src="./ellipse-2.svg" alt="" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute bottom-10 left-12 z-[1]' src="./ellipse-3.svg" alt="" />
               <p className='absolute bottom-[44px] left-[77px] text-white text-[10px]'>
                  +264 has joined
               </p>
               <p className='absolute bottom-4 left-6 text-white font-bold text-[14px]'>
                  The Upside Down
               </p>
            </div>
         </div>
      </div>
   )
}

export default World