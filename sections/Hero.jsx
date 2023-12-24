'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Hero() {
   return (
      <section className='relative py-12'>
         <div className='flex flex-col items-center justify-center'>
            <div className='relative'>
               <motion.h1
                  variants={{
                     hidden: {
                        y: -50, opacity: 0, transition: {
                           type: 'spring', stiffness: 300, damping: 140
                        }
                     },
                     show: {
                        y: 0, opacity: 1, transition: {
                           type: 'spring', stiffness: 80, delay: 1
                        }
                     }
                  }}
                  initial='hidden'
                  whileInView='show'
                  className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'
               >
                  METAVERSE
               </motion.h1>
               <motion.div
                  variants={{
                     hidden: {
                        y: -50, opacity: 0, transition: {
                           type: 'spring', stiffness: 300, damping: 140
                        }
                     },
                     show: {
                        y: 0, opacity: 1, transition: {
                           type: 'spring', stiffness: 80, delay: 1.1
                        }
                     }
                  }}
                  initial='hidden'
                  whileInView='show'
                  className='relative z-10 flex items-center'
               >
                  <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                     MA
                  </h1>
                  <div className='md:w-[212px] lg:mt-2 sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]' />
                  <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                     NESS
                  </h1>
               </motion.div>
            </div>
            <motion.div
               variants={{
                  hidden: {
                     x: '100%'
                  },
                  show: {
                     x: 0, transition: { type: 'spring', stiffness: 400, damping: 90 }
                  }
               }}
               initial='hidden'
               whileInView='show'
               className='relative w-full xl:ps-32 -top-12'
            >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-full h-[350px] object-cover rounded-tl-[140px] rounded-bl-[30px]' src="/cover.png" alt="cover" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='absolute z-10 w-[155px] h-[155px] right-10 lg:right-32 -bottom-20' src="/stamp.png" alt="stamp" />
            </motion.div>
         </div>
      </section>
   )
}

export default Hero