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
                    <h2 >Poparło nas: <br/> <span>{number} osób</span></h2>


                </div>
                <div className="col-6@md">
                    <h3>Dołącz do nas, <span>wyraź swoje poparcie</span> i wywalcz razem z nami stadion, który pozwoli nam walczyć o najwyższe cele sportowe!</h3>

                    <div className="flex">
                        <Link to="/list-otwarty" className="link margin-left-auto margin-top-md">Przeczytaj list otwarty
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                <path fill="var(--color-primary)"
                                      d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                            </svg>
                        </Link>
                    </div>

                    {state.succeeded
                        ?
                        <h3 className="color-primary margin-y-xl">Dziękujęmy za wsparcie!</h3>
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
                                        className="button button--fourth margin-left-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><path fill="var(--color-primary)" d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/></svg>
                                    <span>Podpisz list</span>

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
