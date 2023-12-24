'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Navbar() {
   return (
      <motion.nav
         variants={{
            hidden: {
               y: -50, opacity: 0, transition: {
                  type: 'spring', stiffness: 300, damping: 140
               },
            },
            show: {
               y: 0, opacity: 1, transition: {
                  type: 'spring', stiffness: 80, delay: 1
               }
            }
         }}
         initial='hidden'
         whileInView='show'
      >
         <div className='container mx-auto px-8 lg:px-20 py-8 relative'>
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className='flex justify-between items-center'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-[24px] h-[24px] object-contain' src="/search.svg" alt="search" />
               <h1 className='font-extrabold text-2xl lg:text-4xl uppercase text-white'>
                  metaversus
               </h1>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-[24px] h-[24px] object-contain' src="/menu.svg" alt="menu" />
            </div>
         </div>
      </motion.nav>
   )
}

export default Navbar