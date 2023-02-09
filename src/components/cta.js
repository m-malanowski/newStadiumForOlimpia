import * as React from "react"

const Cta = () => {
    return(
        <div className="cta">
            <div className="cta__image"></div>
            <div className="cta__image--overlay"></div>
            <div className="cta__content">
                <h2 className="uppercase">Wesprzyj Elbląg</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <button className="button button--primary margin-top-md">Podpisz list</button>

            </div>
        </div>
    )
}

export default Cta
