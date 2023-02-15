import * as React from "react"
import {motion} from "framer-motion";

const Hero = () => {
    const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};

    return (
        <div className="hero">
            <motion.div className="hero__image"
                        initial={{ transform: 'scale(1.2)',}}
                        animate={{
                            transform: 'scale(1)',
                            transition: {delay: .3, ...transition},
                        }}
                        exit={{
                            transform: "scale(1.2)",
                            transition: {delay: .2, ...transition},
                        }}
            ></motion.div>

            <div className="hero__image--overlay"></div>

            <div className="hero__cta">
                <h1>Stadion dla <br/> Elbląga</h1>
                <p>“Stadion dla Elbląga” to inicjatywa mieszkańców miasta, którzy mają dosyć marazmu i braku wywiązywania się z obietnic lokalnych polityków.  </p>

                <a type="button" href="#petition" className="button button--secondary margin-top-lg"> Podpisz list </a>
            </div>

            <div className="hero__down">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="21" fill="none"><path fill="#fff" d="M3.646 20.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.707L4 19.293l-2.828-2.828a.5.5 0 1 0-.708.707l3.182 3.182ZM3.5 0v20h1V0h-1Z"/></svg>
            </div>
        </div>
    )
}
export default Hero
