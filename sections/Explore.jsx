'use client'

import { TypingText } from '@/components/CustomText'
import ExploreCard from '@/components/ExploreCard'
import { exploreWorlds } from '@/constants'
import React, { useState } from 'react'

function Explore() {
   const [active, setActive] = useState('world-2')
   return (
      <section className='container mx-auto mt-52 flex flex-col items-center justify-center px-10 lg:px-32'>
         <TypingText text='| The World' textStyle='text-center' />
         <h1 className='mb-12 text-center text-[64px] font-bold text-white'>
            Choose the world you want <br className='hidden lg:block' /> to explore
         </h1>
         <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
            {exploreWorlds.map((world, index) => (
               <ExploreCard
                  key={world.id}
                  index={index}
                  {...world}
                  active={active}
                  setActive={setActive}
               />
            ))}
         </div>
      </section>
   )
}

export default Explore