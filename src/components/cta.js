import * as React from "react"

const Cta = () => {
    return(
        <div className="cta">
            <div className="cta__image"></div>
            <div className="cta__image--overlay"></div>
            <div className="cta__content">
                {/*<h2 >Wesprzyj akcję</h2>*/}
                {/*<p>Twoje poparcie ma znaczenie! Przeczytaj nasz list otwarty i podpisz go. Pokażmy ilu nas jest i jak wielką siłę stanowimy!</p>*/}

                <h2>Twoje poparcie ma znaczenie!</h2>
                <a type="button" href="#petition" className="button button--xl button--primary margin-top-md">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="8" height="21" fill="none"><path fill="var(--color-contrast)" d="M3.646 20.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.707L4 19.293l-2.828-2.828a.5.5 0 1 0-.708.707l3.182 3.182ZM3.5 0v20h1V0h-1Z"/></svg>*/}

                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="var(--color-contrast)" d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/></svg>
                    <span>Podpisz list</span>
                </a>

            </div>
        </div>
    )
}

export default Cta
