'use client'

import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

function ExploreCard({ id, imgUrl, title, index, active, setActive }) {
   const [scope, animate] = useAnimate()
   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1280px)')

      animate([
         ['#world', !mediaQuery.matches &&
            { width: active === id ? '370px' : '170px' },
            { type: 'spring', stiffness: 350, damping: 150 }
         ],
         ['#world', mediaQuery.matches &&
            { height: active === id ? '400px' : '200px' },
            { type: 'spring', stiffness: 350, damping: 150 }
         ]
      ])
   }, [active, animate, id])

   return (
      <motion.div
         ref={scope}
         onClick={() => setActive(id)}
         animate={active === id ? 'show' : 'hidden'}
         className='relative cursor-pointer xl:h-[600px] lg:mt-24'
      >

         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            id='world'
            src={imgUrl}
            alt={title}
            className='w-full h-full object-cover rounded-[24px]'
         />
         <motion.div
            className='absolute bottom-0 p-6 m-4 lg:backdrop-blur-md lg:w-[90%] flex flex-col rounded-[24px] items-start space-y-5'
            variants={{
               hidden: { opacity: 0, scale: 0, transition: { type: 'spring', stiffness: 600, damping: 60 } },
               show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 140, delay: 0.5 } }
            }}
         >
            <div className='flex items-center justify-center w-[60px] h-[60px] rounded-[20px] glassmorphism'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='object-contain w-1/2 h-1/2' src="./headset.svg" alt="headset" />
            </div>
            <p className='lg:pb-12 text-white text-[16px] font-[400px]'>ENTER METAVERSE</p>
            <p className='lg:absolute lg:bottom-4 text-white text-[32px] font-bold'>{title}</p>
         </motion.div>
      </motion.div>
   )
}

export default ExploreCard