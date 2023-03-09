import * as React from "react"
import {Link} from "gatsby";
import Projects from "./projects";
import Why from "./why";
import HorizontalText from "./horizontalText";

const About = () => {
    return (
        <div className="section">

            <div className="grid gap-lg">
                <div className="col-6@md">
                    <h2>Kim jesteśmy?</h2>
                </div>
                <div className="col-6@md">
                    <h3>Jesteśmy kibicami, przyjaciółmi, lokalnymi patriotami, a przede wszystkim mieszkańcami Elbląga. Zrzeszeni w <span>Stowarzyszeniu Kibiców Olimpii Elbląg</span> chcemy wziąć sprawy w swoje ręce.</h3>

                    <div className="flex">
                        <Link to="/list-otwarty" className="link margin-left-auto margin-top-md">Przeczytaj list otwarty
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                <path fill="var(--color-primary)"
                                      d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid gap-lg margin-top-xxl">
                <div className="col-6@md">
                    <h2 >O co chodzi?</h2>
                </div>
                <div className="col-6@md">
                    <div className="grid gap-lg">
                        <div className="col-6@md">
                            <p>Obecny stadion przy <span>Agrykola 8</span> to relikt pamiętający nie tylko poprzedni ustrój, ale także czasy przedwojenne. Na przestrzeni lat, mimo rozwoju i modernizacji Elbląga, obiekt pozostawał w zapomnieniu włodarzy miasta i samorządowców. </p>

                            <p>Wielokrotnie byliśmy zwodzeni wizjami budowy nowego czy też generalnego remontu dotychczasowego stadionu. Były to jednak tylko przedwyborcze obietnice, które szybko wykreślono z planów inwestycyjnych. </p>

                            <p >Lata zaniedbań doprowadziły do tego, że piłkarze Olimpii Elbląg musieli zrezygnować nawet z gotowości do gry o awans do wyższej ligi, gdyż obecny stadion nie spełnia warunków licencyjnych wymaganych do gry w pierwszej lidze.</p>

                        </div>
                        <div className="col-6@md">

                            <p> <span> “Stadion dla Elbląga”</span> to inicjatywa mieszkańców miasta, którzy mają dosyć marazmu i braku wywiązywania się z obietnic lokalnych polityków. To akcja, która ma dać możliwość wszystkim sympatykom piłki nożnej, a także piłkarzom Olimpii godnie reprezentować miasto podczas meczów u siebie. </p>

                        </div>
                    </div>
                </div>
            </div>

            <HorizontalText />
            <Why/>

        </div>
    )
}

export default About

