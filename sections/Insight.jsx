import { TypingText } from '@/components/CustomText'
import InsightCard from '@/components/InsightCard'
import { insights } from '@/constants'
import React from 'react'

function Insight() {
   return (
      <div className='container px-8 mx-auto mt-52 lg:px-24'>
         <div className='flex flex-col items-center justify-center'>
            <TypingText text='| Insight' />
            <h1 className='text-[48px] lg:text-[64px] font-bold -leading-[1.28px] text-white'>
               Insight about metaverse
            </h1>
            {insights.map((item, index) => (
               <InsightCard
                  key={item.title}
                  index={index}
                  {...item}
               />
            ))}
         </div>
      </div>
   )
}

export default Insight