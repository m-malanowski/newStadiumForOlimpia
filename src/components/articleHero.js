import * as React from "react"
import {motion} from "framer-motion";
import img from '../images/cta.jpg'
const ArticleHero = ({title, data}) => {
    const transition = {duration: 2., ease: [0.6, 0.01, -0.05, 0.9]};
    const backgroundImage = {
        backgroundImage: `url(${img})`
    }

    return (
        <div className="hero hero--article" >
            <motion.div className="hero__image"
                        style={backgroundImage}
                        initial={{ height: "100vh" }}
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
                        initial={{  height: "100vh" }}
                        animate={{
                            height: "60vh",
                            transition: {delay: .3, ...transition},
                        }}
                        exit={{
                            height: "70vh",
                            transition: {delay: .2, ...transition},
                        }}
            ></motion.div>

            <div className="grid gap-md margin-bottom-sm">

                <div className="col-2@md">
                   <p> {data} </p>
                </div>
                <div className="col-8@md">
                    <h1>{title}</h1>
                </div>
                <div className="col-2@md"></div>

            </div>
        </div>
    )
}

export default ArticleHero
