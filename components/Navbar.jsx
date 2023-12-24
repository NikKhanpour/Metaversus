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
         <div className='container relative px-8 py-8 mx-auto lg:px-20'>
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div className='flex items-center justify-between'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-[24px] h-[24px] object-contain' src="./search.svg" alt="search" />
               <h1 className='text-2xl font-extrabold text-white uppercase lg:text-4xl'>
                  metaversus
               </h1>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-[24px] h-[24px] object-contain' src="./menu.svg" alt="menu" />
            </div>
         </div>
      </motion.nav>
   )
}

export default Navbar