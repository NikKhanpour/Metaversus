'use client'

import { TypingText } from '@/components/CustomText'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { exploreWorlds } from '@/constants'
import ExploreCard2 from '@/components/ExploreCard2'

function Explore2() {
   const [active, setActive] = useState('world-2')
   return (
      <div className='container mx-auto flex flex-col items-center mt-52'>
         <div className='flex flex-col text-center'>
            <TypingText text='| The World' textStyle='text-secondary-white' />
            <motion.h1
               variants={{
                  hidden: { y: 150, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 140 } }
               }}
               initial='hidden'
               whileInView='show'
               className='text-3xl lg:text-[64px] font-bold leading-normal tracking-[-1.28px] text-white'
            >
               Choose the world you want <br className='hidden lg:block' /> to explore
            </motion.h1>
         </div>
         <div className='flex flex-col xl:flex-row px-10 xl:px-36 gap-5 mt-20'>
            <AnimatePresence>
               {exploreWorlds.map((world, index) => (
                  <ExploreCard2
                     key={world.id}
                     {...world}
                     index={index}
                     active={active}
                     setActive={setActive}
                  />
               ))}
            </AnimatePresence>
         </div>
      </div>
   )
}

export default Explore2