import React from "react"
import {motion} from "framer-motion"

const FakeLoader = () => {
    return (
        <motion.div
            className="welcome"
            initial={{opacity: 1}}
            animate={{
                opacity: 0,
                transition: {delay: 5.0, when: "beforeChildren", duration: .3},
                transitionEnd: {
                    display: "none"
                }
            }}
        >

        </motion.div>
    )
}

export default FakeLoader
