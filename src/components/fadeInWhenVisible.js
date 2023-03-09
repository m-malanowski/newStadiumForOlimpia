import React from "react"
import { motion } from "framer-motion";
function FadeInWhenVisible({children, delay, nameOfClass}) {

    const variants = {
        initial: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1,
                ease: [0, 0.55, 0.45, 1],
                staggerChildren: 2.5
            }
        },
        exit: {
            y: 5,
            opacity: 0,
            transition: {
                delay: .2,
                duration: .4,
                ease: [0, 0.55, 0.45, 1],
            }
        }
    }
    return (
        <motion.div
            whileInView="visible"
            viewport={{once: true}}
            variants={variants}
            initial="initial"
            exit="exit"
            className={nameOfClass}
        >
            {children}
        </motion.div>
    );
}

export default FadeInWhenVisible
