import * as React from "react";
import {Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = ({title, date, content, slug, media}) => {
    const link = `/${slug}`
    const image = getImage(media)

    return(
        <div className="card">
            <div className="card__media">
                <GatsbyImage image={image} alt={slug} className="card__preview" />
                {/*<img src={media} className="card__preview"></img>*/}
            </div>
            <div className="card__body">
                <h4 className="card__title">{title}</h4>
                <p className="card__content">{content}</p>
                <div className="card__footer">
                    <p className="card__date">{date}</p>
                    <Link to={link} className="link">Czytaj więcej

                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="var(--color-primary)" d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/></svg>

                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg>*/}

                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card
