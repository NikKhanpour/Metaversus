'use client'

import { motion } from 'framer-motion'

export function TypingText({ text, textStyle }) {
   return (
      <motion.p
         className={`font-normal text-[14px] text-secondary-white ${textStyle}`}
         variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
         }}
         initial='hidden'
         whileInView='show'
      >
         {Array.from(text).map((letter, index) => (
            <motion.span key={index}
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: 'tween', ease: 'easeIn' } }
               }}
            >
               {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
         ))}
      </motion.p>
   )
}