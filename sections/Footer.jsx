'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
   return (
      <motion.div
         className='container px-8 mx-auto mt-52 lg:px-32'
         variants={{
            hidden: {
               y: 50, opacity: 0, transition: {
                  delay: 0, type: 'spring', stiffness: 400, damping: 140
               }
            },
            show: {
               y: 0, opacity: 1, transition: {
                  delay: 0.5, type: 'spring', stiffness: 400, damping: 70
               }
            }
         }}
         initial='hidden'
         whileInView='show'
      >
         <div className='flex flex-col items-center justify-center space-y-[80px]'>
            <div className='flex w-full flex-col items-center justify-between pb-[80px] lg:flex-row'>
               <h2 className='text-center text-[64px] font-bold -tracking-[1.28px] text-white lg:text-start'>
                  Enter the Metaverse
               </h2>
               <motion.button
                  whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 55 } }}
                  whileTap={{ scale: 0.9, transition: { type: 'spring', stiffness: 400, damping: 55 } }}
                  className='flex items-center px-8 py-5 mt-8 space-x-3 bg-blue-600 rounded-full lg:mt-0'
               >
                  <img className='w-6 h-6' src="/headset.svg" alt="headset" />
                  <p className='text-[16px] font-normal tracking-[0.08px] text-white'>
                     ENTER METAVERSE
                  </p>
               </motion.button>
            </div>
         </div>
         <div className='h-[1px] w-full bg-white bg-opacity-40' />
         <div className='flex flex-col items-center justify-between space-y-8 py-[54px] lg:flex-row lg:space-y-0'>
            <p className='text-[24px] font-extrabold text-white'>
               METAVERSUS
            </p>
            <p className='text-center text-[14px] font-normal leading-[21px] tracking-[0.07px] text-white text-opacity-50 lg:text-start'>
               Copyright © 2022 - 2023 Metaversus. All rights reserved.
            </p>
            <div className='flex items-center space-x-[30px]'>
               <img className='w-6 h-6' src="/twitter.svg" alt="twitter" />
               <img className='w-6 h-6' src="/linkedin.svg" alt="linkedin" />
               <img className='w-6 h-6' src="/instagram.svg" alt="instagram" />
               <img className='w-6 h-6' src="/facebook.svg" alt="facebook" />
            </div>
         </div>
      </motion.div>
   )
}

export default Footer