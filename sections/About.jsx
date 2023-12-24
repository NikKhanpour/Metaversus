'use client'

import { TypingText } from '@/components/CustomText'
import React from 'react'

import { motion } from 'framer-motion'

function About() {
   return (
      <div className='container flex flex-col items-center justify-center px-12 mx-auto mt-44 lg:px-44'>
         <TypingText text='| About Metaversus' textStyle='text-center' />
         <motion.p
            variants={{
               hidden: { y: 100, opacity: 0 },
               show: {
                  y: 0, opacity: 1, transition: {
                     type: 'spring', stiffness: 400, damping: 80
                  }
               }
            }}
            initial='hidden'
            whileInView='show'
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
         >
            <span className="font-extrabold text-white">Metaverse</span> is a new
            thing in the future, where you can enjoy the virtual world by feeling
            like its really real, you can feel what you feel in this metaverse
            world, because this is really the{' '}
            <span className="font-extrabold text-white">
               madness of the metaverse
            </span>{' '}
            of today, using only{' '}
            <span className="font-extrabold text-white">VR</span> devices you can
            easily explore the metaverse world you want, turn your dreams into
            reality. Lets{' '}
            <span className="font-extrabold text-white">explore</span> the madness
            of the metaverse by scrolling down
         </motion.p>
         <div className="z-0 gradient-02" />
      </div>
   )
}

export default About