import React from 'react'
import { FlipWords } from "./FlipWords"
import { motion } from 'motion/react';

const TusharText = () => {
    const words = [ "Chutiya", "Gandu", "Laudu" ];
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* DESKTOP VIEW */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 
                className="text-4xl font-medium"
                variants={variants}
                initial= "hidden"
                animate= "visible"
                transition={{ delay: 1 }}
            >
                Hi, I'm Tushar
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                    className="text-5xl font-medium text-neutral-300" 
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.2 }}
                >
                    You <br /> are
                </motion.p>
                {/* get flip word from aceternity */}
                <motion.div
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.5 }}
                >
                    <FlipWords 
                        words={words} 
                        className="font-black text-white text-8xl" 
                    />
                </motion.div>
                <motion.p 
                    className="text-4xl font-medium text-neutral-300"
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.8 }}
                >
                    chal ab nikal
                </motion.p>
            </div>
        </div>
        {/* MOBILE VIEW */}
        <div className="flex flex-col space-y-6 md:hidden">
            <motion.p 
                className="text-4xl font-medium" variants={variants}
                initial= "hidden"
                animate= "visible"
                transition={{ delay: 1 }}
            >
                Hi, I'm Tushar
            </motion.p>
            <div>
                <motion.p 
                    className="text-5xl space-y-6 text-neutral-300" 
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.2 }}
                >
                    and You're
                </motion.p>
                <motion.div
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.5 }}
                >
                    <FlipWords 
                        words={words} 
                        className="font-bold text-white text-7xl" 
                    />
                </motion.div>
                <motion.p 
                    className="text-4xl font-black text-neutral-300"
                    variants={variants}
                    initial= "hidden"
                    animate= "visible"
                    transition={{ delay: 1.8 }}
                >
                    Chal ab Nikal
                </motion.p>
            </div>
        </div>
    </div>
  )
}

export default TusharText