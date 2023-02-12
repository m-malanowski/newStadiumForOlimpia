import * as React from "react"
import {motion} from "framer-motion";
import img from "../images/cta.jpg";

const SubHero = ({title}) => {
    const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className="hero hero--sub">
            <motion.div className="hero__image"
                        style={backgroundImage}
                        initial={{ height: "65vh" }}
                        animate={{
                            backgroundImage: img,
                            height: "60vh",
                            transition: {delay: .3, ...transition},
                        }}
                        exit={{
                            height: "70vh",
                            transition: {delay: .2, ...transition},
                        }}
            ></motion.div>
            <motion.div className="hero__image--overlay"
                        initial={{  height: "65vh" }}
                        animate={{
                            height: "60vh",
                            transition: {delay: .3, ...transition},
                        }}
                        exit={{
                            height: "70vh",
                            transition: {delay: .2, ...transition},
                        }}
            ></motion.div>

            <div className="hero__cta">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SubHero
