'use client'

import { TypingText } from '@/components/CustomText'
import React from 'react'
import { startingFeatures } from '@/constants'
import { motion } from 'framer-motion'

function GetStarted() {
   return (
      <div className='container flex flex-col items-center px-8 mx-auto lg:flex-row lg:px-24 mt-52'>
         <motion.div
            variants={{
               hidden: {
                  x: -200, rotate: '-90deg', opacity: 0, transition: {
                     type: 'spring', stiffness: 400, damping: 140
                  }
               },
               show: {
                  x: 0, rotate: 0, opacity: 1, transition: {
                     type: 'spring', stiffness: 400, damping: 140, delay: 0.3
                  }
               }
            }}
            initial='hidden'
            whileInView='show'
         >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='w-full h-full lg:w-[70%] lg:h-[70%] object-contain mx-auto' src="./get-started.png" alt="get-started" />
         </motion.div>
         <motion.div
            className='flex flex-col items-center justify-center space-y-6 lg:items-start'
            variants={{
               hidden: { x: 200, opacity: 0 },
               show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 80 } }
            }}
            initial='hidden'
            whileInView='show'
         >
            <TypingText text='| How Metaversus Works' />
            <h1 className='text-[64px] font-bold leading-[76.8px] -tracking-[1.28px] text-center lg:text-start text-white'>Get started with just a few clicks</h1>
            {startingFeatures.map((item, index) => (
               <div key={index}
                  className='flex items-center justify-start space-x-4'
               >
                  <div className='bg-[#323F5D] w-[70px] h-[70px] rounded-3xl flex items-center justify-center'>
                     <p className='text-xl font-bold text-white'>{index + 1}</p>
                  </div>
                  <p className='text-[18px] font-normal text-[#B0B0B0] w-[250px] lg:w-1/2 '>
                     {item}
                  </p>
               </div>
            ))}
         </motion.div>
      </div>
   )
}

export default GetStarted