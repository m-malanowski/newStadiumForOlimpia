import * as React from "react"

const Cta = () => {
    return(
        <div className="cta">
            <div className="cta__image"></div>
            <div className="cta__image--overlay"></div>
            <div className="cta__content">
                <h2 className="uppercase">Wesprzyj akcję</h2>
                <p>Twoje poparcie ma znaczenie! Przeczytaj nasz list otwarty i podpisz go. Pokażmy ilu nas jest i jak wielką siłę stanowimy!</p>
                <a type="button" href="#petition" className="button button--primary margin-top-md">Podpisz list</a>

            </div>
        </div>
    )
}

export default Cta
