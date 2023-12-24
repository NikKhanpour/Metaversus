'use client'

import { TypingText } from '@/components/CustomText'
import React from 'react'
import { newFeatures } from '@/constants'
import { motion } from 'framer-motion'

function NewFeatures() {
   return (
      <div className='flex flex-col lg:flex-row items-center mt-52 container mx-auto px-8 lg:ps-32 lg:px-24'>
         <motion.div className='flex flex-col'
            variants={{
               hidden: { x: -200, opacity: 0 },
               show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 80 } }
            }}
            initial='hidden'
            whileInView='show'
         >
            <TypingText text='| Whats New?' />
            <h1 className='text-[64px] font-bold leading-[76.8px] -tracking-[1.28px] text-center lg:text-start text-white mb-12'>
               {/* eslint-disable-next-line react/no-unescaped-entities */}
               What's new about Metaversus?
            </h1>
            <div className='flex items-center gap-5 lg:gap-0'>
               {newFeatures.map(item => (
                  <div key={item.title} className='flex flex-col space-y-4 text-center lg:text-start'>
                     <div className='bg-[#323F5D] rounded-[24px] w-[70px] h-[70px] flex items-center justify-center mx-auto lg:mx-0'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                           alt="icon"
                           src={item.imgUrl}
                           className='w-1/2 h-1/2 object-contain'
                        />
                     </div>
                     <h4 className='text-[24px] font-bold text-white'>
                        {item.title}
                     </h4>
                     <p className='text-[16px] font-normal leading-[28.8px] text-[#B0B0B0] lg:w-4/5'>
                        {item.subtitle}
                     </p>
                  </div>
               ))}
            </div>
         </motion.div>
         <motion.div
            variants={{
               hidden: {
                  x: 200, rotate: '90deg', opacity: 0, transition: {
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
            <img
               alt="whats-new"
               src="/whats-new.png"
               className='w-full h-full lg:w-[70%] lg:h-[70%] object-contain mx-auto'
            />
         </motion.div>
      </div>
   )
}

export default NewFeatures