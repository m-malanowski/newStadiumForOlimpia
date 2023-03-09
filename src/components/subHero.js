import * as React from "react"
import {motion} from "framer-motion";
import img from "../images/cta2.jpg";
import FadeInWhenVisible from "./fadeInWhenVisible";

const SubHero = ({title}) => {
    const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className="hero hero--sub">
            {/*<motion.div className="hero__image"*/}
            {/*            style={backgroundImage}*/}
            {/*            initial={{ transform: "scale(1.2)" }}*/}
            {/*            animate={{*/}
            {/*                backgroundImage: img,*/}
            {/*                transform: "scale(1)",*/}
            {/*                transition: {delay: .3, ...transition},*/}
            {/*            }}*/}
            {/*            exit={{*/}
            {/*                transform: "scale(1.2)",*/}
            {/*                transition: {delay: .2, ...transition},*/}
            {/*            }}*/}
            {/*></motion.div>*/}
            {/*<motion.div className="hero__image--overlay"*/}
            {/*            initial={{  transform: "scale(1.2)" }}*/}
            {/*            animate={{*/}
            {/*                transform: "scale(1)",*/}
            {/*                transition: {delay: .3, ...transition},*/}
            {/*            }}*/}
            {/*            exit={{*/}
            {/*                transform: "scale(1.2)",*/}
            {/*                transition: {delay: .2, ...transition},*/}
            {/*            }}*/}
            {/*></motion.div>*/}

            <div className="hero__cta">
                <FadeInWhenVisible delay={.3}>
                    <h1>{title}</h1>
                </FadeInWhenVisible>
            </div>
        </div>
    )
}

export default SubHero
