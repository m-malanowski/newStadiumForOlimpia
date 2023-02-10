import * as React from "react"

const Petition = () => {
    return (
        <div>
            <div className="grid gap-lg margin-top-xxl">
                <div className="col-6@md">
                    <h2 className="uppercase">Poparło nas: <br/> <span>557 osób</span></h2>
                    <a href="#" className="link">Przeczytaj list otwarty <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></a>

                </div>
                <div className="col-6@md">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <span>tempor incididunt ut labore et dolore magna aliqua</span>.
                        Ut enim ad minim veniam. quis nostrud exercitation
                    </h3>


                    <div className="form">
                        <div className="form__inputs margin-top-lg">
                            <input type="text" className="form__input" placeholder="Twoje imię" name="name"/>
                            <input type="text" className="form__input" placeholder="Twoje Nazwisko" name="email"/>
                            <input type="text" className="form__input" placeholder="Napisz coś więcej"
                                   name="description"/>

                            <button className="button button--third margin-left-auto">Podpisz list</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Petition
