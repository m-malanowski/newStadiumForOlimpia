import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import {useForm, ValidationError} from '@formspree/react';

const Petition = () => {
    const [state, handleSubmit] = useForm("mnqypgna");
    const [number, setNumber] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://stadion-dla-elblaga.herokuapp.com/api/support/");
            const data = await res.json();
            setNumber(data.data.attributes.number);
        }
        fetchData();
    }, []);

    const foo = (event) =>{
        handleSubmit(event)
        setTimeout(()=>{
            handleSupportUpdate()
        },1000)
    }

    const handleSupportUpdate = async () => {
        console.log(number)

        await fetch("https://stadion-dla-elblaga.herokuapp.com/api/support/", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    "data": {
                        "number": number + 1,
                    }
                }
            ),
        });
        setNumber(number + 1);
    };

    return (
        <div>
            <div className="grid gap-lg margin-top-xxl" id="petition">
                <div className="col-6@md">
                    <h2 className="uppercase">Poparło nas: <br/> <span>{number} osób</span></h2>
                    <Link to="/list-otwarty" className="link">Przeczytaj list otwarty <svg
                        xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none">
                        <path fill="#0E6AAC"
                              d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/>
                    </svg></Link>

                </div>
                <div className="col-6@md">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <span>tempor incididunt ut labore et dolore magna aliqua</span>.
                        Ut enim ad minim veniam. quis nostrud exercitation
                    </h3>

                    {state.succeeded
                        ?
                        <h2 className="color-primary margin-y-xl">Dziękujęmy za wsparcie!</h2>
                        :
                        <form
                            onSubmit={foo}
                            className="form"
                        >
                            <div className="form__inputs margin-top-lg">
                                <input type="text" className="form__input" placeholder="Twoje imię" name="name" id="name"
                                       required/>
                                <input type="text" className="form__input" placeholder="Twój email" name="email" id="email"
                                       required/>
                                <input type="text" className="form__input" placeholder="Napisz coś więcej"
                                       name="description"/>

                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />

                                <button
                                    disabled={state.submitting} type="submit"
                                        className="button button--fourth margin-left-auto">Podpisz list
                                </button>
                            </div>
                        </form>
                    }

                </div>
            </div>
        </div>
    )
}

export default Petition
