import * as React from "react"

const SubHero = ({title}) => {
    return (
        <div className="hero hero--sub">
            <div className="hero__image"></div>
            <div className="hero__image--overlay"></div>

            <div className="hero__cta">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SubHero
