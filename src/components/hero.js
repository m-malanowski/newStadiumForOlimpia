import * as React from "react"
const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__image"></div>
            <div className="hero__image--overlay"></div>

            <div className="hero__cta">
                <h1>Nowy stadion dla Elbląga</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                {/*<a href="#petition" className="button button--secondary margin-top-lg"> Podpisz list </a>*/}
                <button className="button button--secondary margin-top-lg"> Podpisz list </button>
            </div>

            <div className="hero__down">
                {/*<span>Zjedź niżej</span>*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="21" fill="none"><path fill="#fff" d="M3.646 20.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.707L4 19.293l-2.828-2.828a.5.5 0 1 0-.708.707l3.182 3.182ZM3.5 0v20h1V0h-1Z"/></svg>
            </div>
        </div>
    )
}
export default Hero
