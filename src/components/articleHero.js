import * as React from "react"
const ArticleHero = ({title, data}) => {
    return (
        <div className="hero hero--article">
            <div className="hero__image"></div>
            <div className="hero__image--overlay"></div>

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
