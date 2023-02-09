import * as React from "react"
const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__image"></div>
            <div className="hero__image--overlay"></div>

            <div className="hero__cta">
                <h1>Nowy stadion dla Elbląga</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                <button className="button button--secondary margin-top-lg"> Podpisz list </button>

            </div>
        </div>
    )
}
export default Hero
