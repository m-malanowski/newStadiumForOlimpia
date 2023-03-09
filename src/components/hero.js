import * as React from "react"
import {motion} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import FadeInWhenVisible from "../components/fadeInWhenVisible"

const Hero = () => {
    const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};

    return (
        <div className="hero">
            <motion.div className="hero__image"
                        initial={{ transform: 'scale(1.2)',}}
                        animate={{
                            transform: 'scale(1)',
                            transition: {delay: 5.3, ...transition},
                        }}
                        exit={{
                            transform: "scale(1.2)",
                            transition: {delay: .1, ...transition},
                        }}
            ></motion.div>

            <div className="hero__image--overlay"></div>

            <div className="hero__cta">

                <TypeAnimation
                    sequence={[
                        'Moje miasto', // Types 'One'
                        1000, // Waits 1s
                        'Mój klub', // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        'Moja Rodzina', // Types 'Three' without deleting 'Two'
                        1000,
                        () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    className="motto"
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                />

                <FadeInWhenVisible delay={5.8}>
                    <h3 className="color-white">Po latach ignorowania kibiców chcemy zawalczyć <br/> o nasze miejsce, nasz dom - stadion przy <b> Agrykola 8</b>.</h3>
                </FadeInWhenVisible>


                <FadeInWhenVisible delay={6}>
                    <a type="button" href="#petition" className="button button--secondary margin-top-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="var(--color-white)" d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/></svg>
                        <span>Podpisz list</span>
                    </a>
                </FadeInWhenVisible>

            </div>

            <div className="hero__down">
                <span >Scroll down for more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="var(--color-white)" d="m0 8 1.4-1.425 5.6 5.6V0h2v12.175l5.6-5.6L16 8l-8 8-8-8Z"/></svg>
            </div>

        </div>
    )
}
export default Hero
