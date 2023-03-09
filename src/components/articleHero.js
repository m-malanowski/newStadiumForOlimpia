import * as React from "react"
import {motion} from "framer-motion";
// import img from '../images/main.jpg'
import {GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleHero = ({title, data, media}) => {
    const transition = {duration: 2., ease: [0.6, 0.01, -0.05, 0.9]};
    const image = getImage(media)

    console.log(image, 'image')
    console.log(media, 'media')

    // const backgroundImage = {
    //     backgroundImage: `url(${media})`
    // }


    return (
        <div className="hero hero--article">

            <GatsbyImage image={image} alt={title} />

            {/*<motion.div className="hero__image"*/}
            {/*            style={backgroundImage}*/}
            {/*            initial={{ transform: "scale(1.2)"}}*/}
            {/*            animate={{*/}
            {/*                transform: "scale(1)",*/}
            {/*                transition: {delay: .3, ...transition},*/}
            {/*            }}*/}
            {/*            exit={{*/}
            {/*                transform: "scale(1.2)",*/}
            {/*                transition: {delay: .2, ...transition},*/}
            {/*            }}*/}
            {/*></motion.div>*/}
            <motion.div className="hero__image--overlay"
                        initial={{ transform: "scale(1.2)" }}
                        animate={{
                            transform: "scale(1)",
                            transition: {delay: .3, ...transition},
                        }}
                        exit={{
                            transform: "scale(1.2)",
                            transition: {delay: .2, ...transition},
                        }}
            ></motion.div>

            <div className="grid gap-md margin-bottom-sm article__title">
                <div className="col-2@md">
                   <p> {data} </p>
                </div>
                <div className="col-8@md">
                    <h1> {title} </h1>
                </div>
                <div className="col-2@md"></div>

            </div>
        </div>
    )
}

export default ArticleHero
