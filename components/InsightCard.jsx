'use client'

import React from 'react'
import { motion } from 'framer-motion'

function InsightCard({ imgUrl, title, subtitle, index }) {
   return (
      <motion.div
         className='mt-12 flex flex-col items-center justify-between lg:flex-row'
         variants={{
            hidden: { x: -200, opacity: 0 },
            show: {
               x: 0, opacity: 1, transition: {
                  type: 'spring', stiffness: 400, damping: 80, delay: 0.1 * index
               }
            }
         }}
         initial='hidden'
         whileInView='show'
      >
         <div className='flex flex-col items-center space-y-10 text-center lg:flex-row lg:space-x-[62px] lg:space-y-0 lg:text-start'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className='h-full w-full rounded-[32px] object-cover lg:h-[250px] lg:w-[270px]' src={imgUrl} alt={title} />
            <div className='flex flex-col space-y-[16px] lg:w-1/2'>
               <h2 className='text-[42px] font-normal leading-[52.2px] -tracking-[0.84px] text-white'>
                  {title}
               </h2>
               <p className='text-[20px] font-normal leading-[40px] tracking-[0.1px] text-white text-opacity-50'>
                  {subtitle}
               </p>
            </div>
         </div>
         <div className='mt-4 cursor-pointer rounded-full border-[2px] p-[17px] lg:mt-0'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arrow.svg" alt="arrow" />
         </div>
      </motion.div>
   )
}

export default InsightCard