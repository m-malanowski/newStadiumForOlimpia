import * as React from "react";
import foo from "../images/cta.jpg";

const Card = () => {
    return(
        <div className="card">
            <div className="card__media">
                <img src={foo} className="card__preview"></img>
            </div>
            <div className="card__body">
                <p>01-03-2023</p>
                <h4 className="card__title">Lorem ipsum dolor sit
                    quis nostrud exercitation.
                </h4>
                <p>Lorem ipsum dolor sit
                    quis nostrud exercitation.
                    Lorem ipsum dolor sit
                    quis nostrud exercitation.
                </p>
                <a href="#" className="link margin-left-auto">Czytaj więcej<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></a>
            </div>
        </div>
    )
}
export default Card
