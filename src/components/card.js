import * as React from "react";
import foo from "../images/cta.jpg";
import {Link} from "gatsby";

const Card = ({title, date, content, slug, src}) => {
    const link = `/${slug}`
    return(
        <div className="card">
            <div className="card__media">
                <img src={foo} className="card__preview"></img>
            </div>
            <div className="card__body">
                <h4 className="card__title">{title}</h4>
                <p className="card__content">{content}</p>
                <div className="card__footer">
                    <p>{date}</p>
                    <Link to={link} className="link">Czytaj więcej<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></Link>
                </div>
            </div>
        </div>
    )
}
export default Card
