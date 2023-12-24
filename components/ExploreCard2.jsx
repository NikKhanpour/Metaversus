'use client'

import { useAnimate, motion } from 'framer-motion'
import React, { useEffect } from 'react'

function ExploreCard2({ id, index, imgUrl, title, active, setActive }) {
   const [scope, animate] = useAnimate()

   useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 1280px)')
      animate([
         ['#world', !mediaQuery.matches &&
            { width: active === id ? '500px' : '200px', opacity: active === id ? 1 : 0.4 },
            { at: 'end', type: 'spring', stiffness: 400, damping: 140 }],
         ['#world', mediaQuery.matches &&
            { height: active === id ? '250px' : '100px', opacity: active === id ? 1 : 0.4 },
            { at: 'end', type: 'spring', stiffness: 400, damping: 140 }],
      ])
   }, [id, active, animate])

   return (
      <motion.div
         ref={scope}
         onClick={() => setActive(id)}
         className='xl:h-[600px] cursor-pointer relative'
         animate={active === id ? 'open' : 'close'}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img className='h-full w-full object-cover rounded-[24px]' id='world' src={imgUrl} alt={title} />
         <motion.div
            variants={{
               close: {
                  scale: 0, opacity: 0, transition: {
                     type: 'spring',
                     stiffness: '1000',
                     damping: 100,
                  }
               },
               open: {
                  scale: 1, opacity: 1, transition: {
                     type: 'spring',
                     stiffness: '400',
                     damping: 150,
                     delay: 0.8
                  }
               }
            }}
            className='absolute flex flex-col space-y-4 items-start bottom-0 px-8 z-20'>
            <div id='item' className='flex items-center justify-center w-[60px] h-[60px] rounded-[20px] glassmorphism'>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img className='w-1/2 h-1/2 object-contain' src="/headset.svg" alt="headset" />
            </div>
            <p id='item' className='text-[16px] font-normal text-white'>ENTER METAVERSE</p>
            <h2 id='item' className='text-[32px] text-white text-bold pb-6'>
               {title}
            </h2>
         </motion.div>
      </motion.div>
   )
}

export default ExploreCard2