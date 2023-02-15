import * as React from "react"
import {Link} from "gatsby";

const About = () => {
    return (
        <div className="section">

            <div className="grid gap-lg ">
                <div className="col-6@md">
                    <h2 className="uppercase">Kim jesteśmy?</h2>
                </div>
                <div className="col-6@md">
                    <h3>Jesteśmy kibicami, przyjaciółmi, lokalnymi patriotami, a przede wszystkim mieszkańcami Elbląga. Zrzeszeni w <span>Stowarzyszeniu Kibiców Olimpii Elbląg</span> chcemy wziąć sprawy w swoje ręce.</h3>

                    <div className="grid margin-top-lg">
                        <div className="col-6@md">
                            <p className="margin-top-lg">Po latach ignorowania kibiców chcemy zawalczyć o nasze miejsce, nasz dom - stadion przy Agrykola 8.</p>
                        </div>
                        <div className="col-6@md"></div>
                    </div>

                </div>
            </div>

            <div className="grid gap-lg margin-top-xxl">
                <div className="col-6@md">
                    <h2 className="uppercase">O co chodzi?</h2>
                </div>
                <div className="col-6@md">
                    <div className="grid gap-lg">
                        <div className="col-6@md">
                            <p>Obecny stadion przy <span>Agrykola 8</span> to relikt pamiętający nie tylko poprzedni ustrój, ale także czasy przedwojenne. Na przestrzeni lat, mimo rozwoju i modernizacji Elbląga, obiekt pozostawał w zapomnieniu włodarzy miasta i samorządowców. <br/><br/> Wielokrotnie byliśmy zwodzeni wizjami budowy nowego czy też generalnego remontu dotychczasowego stadionu. Były to jednak tylko przedwyborcze obietnice, które szybko wykreślono z planów inwestycyjnych. </p>
                        </div>
                        <div className="col-6@md">
                            <p>Lata zaniedbań doprowadziły do tego, że piłkarze Olimpii Elbląg musieli zrezygnować nawet z gotowości do gry o awans do wyższej ligi, gdyż obecny stadion nie spełnia warunków licencyjnych wymaganych do gry w pierwszej lidze.</p>
                            <p><span>“Stadion dla Elbląga”</span> to inicjatywa mieszkańców miasta, którzy mają dosyć marazmu i braku wywiązywania się z obietnic lokalnych polityków. To akcja, która ma dać możliwość wszystkim sympatykom piłki nożnej, a także piłkarzom Olimpii godnie reprezentować miasto podczas meczów u siebie. </p>

                            <Link to="/list-otwarty" className="link margin-left-auto margin-top-xxl">Przeczytaj list otwarty <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></Link>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About

