import * as React from "react"
import {Link} from "gatsby";

const Why = () => {
    return (
        <div className="grid gap-lg margin-top-xl">
            <div className="col-6@md">
                <h2 >Dlaczego to <br/> ważne?</h2>
            </div>

            <div className="col-6@md">
                <h3>Facere harum ipsam maiores necessitatibus neque nobis repellat repellendus saepe sit, totam ullam, voluptatum?</h3>

                <div className="grid gap-lg margin-top-xl">
                    {/*<div className="col-6@md"></div>*/}
                    <div className="col-12@md">
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Szansa dla Elblążan</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>

                            <p className="why__body">Stadion powinien być miejscem  dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>

                        </div>
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Symbol rozwoju Elbląga</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>
                            <p className="why__body">Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>
                        </div>
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Lokalny patriotyzm</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>
                            <p className="why__body">Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>
                        </div>
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Wizytówka miasta</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>
                            <p className="why__body">Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>
                        </div>
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Rozwój młodzieży</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>
                            <p className="why__body">Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>
                        </div>
                        <div className="why__single">
                            <div className="why__head">
                                <h5>Miejsce spotkań Elblążan</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path fill="var(--color-contrast-lower)"
                                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                                </svg>
                            </div>
                            <p className="why__body">Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>
                        </div>

                    </div>
                </div>
            </div>


            {/*<div className="col-6@md">*/}
            {/*    <h3>Jesteśmy kibicami, przyjaciółmi, lokalnymi patriotami, a przede wszystkim mieszkańcami Elbląga. Zrzeszeni w <span>Stowarzyszeniu Kibiców Olimpii Elbląg</span> chcemy wziąć sprawy w swoje ręce.</h3>*/}

            {/*    <Link to="/list-otwarty" className="link margin-left-auto margin-top-xxl">Przeczytaj więcej <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></Link>*/}

            {/*</div>*/}

            {/*<div className="col-6@md">*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <h5>Szansa dla Elblążan</h5>*/}
            {/*            <p>Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h5>Symbol rozwoju Elbląga</h5>*/}
            {/*            <p>Ponad 30 lat inwestycji w drogi, port, centra usługowo-handlowe to chluba miasta. Ubolewamy, że modernizacja ominęła najważniejszy obiekt sportowy w mieście - stadion przy agrykola 8 - który jest przedmiotem żartów kibiców i komentatorów sportowych z całej Polski.</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h5>Lokalny patriotyzm</h5>*/}
            {/*            <p>Trybuny stadionu to miejsce, w którym od najmłodszych lat mieszkańcy Elbląga uczą się patriotyzmu, przywiązania do barw i tradycji klubu sportowego Olimpia. To właśnie tutaj kształtują się ważne postawy, które pozwalają budować silną społeczność. Takie inicjatywy zasługują na dom z prawdziwego zdarzenia i przystający do rangi miasta.</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h5>Wizytówka miasta</h5>*/}
            {/*            <p>Nowoczesny obiekt piłkarski i silna drużyna to doskonała reklama miasta i prawdziwe okno na świat dla lokalnego biznesu, który ma szansę być częścią tej pięknej historii.</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h5>Rozwój młodzieży</h5>*/}
            {/*            <p>Sport to od wieków najlepsza metoda kształtowania charakteru i kondycji dla młodych pokoleń. Kariery wielu młodych i utalentowanych piłkarzy z Elbląga często kończą się przedwcześnie ze względu na brak możliwości dalszego rozwoju w drużynie walczącej o najwyższe cele. Jednym z głównych powodów tego stanu rzeczy jest niewystarczająca infrastruktura.</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h5>Miejsce spotkań Elblążan</h5>*/}
            {/*            <p>Stadiony piłkarskie to miejsca nie tylko zmagań sportowych, ale także imprez, kulturalnych wydarzeń i spotkań, które jednoczą mieszkańców miasta. Elbląg obecnie nie posiada punktu na mapie, który pozwala na organizację dużego wydarzenia plenerowego. Stadion jest idealnym miejscem do organizacji takich inicjatyw jak koncerty czy konferencje.</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default Why

