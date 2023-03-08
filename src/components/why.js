import * as React from "react"
import {Link} from "gatsby";
import Accordion from "./accordion";

const Why = () => {
    return (
        <div className="grid gap-lg margin-top-xl">
            <div className="col-6@md">
                <h2 >Dlaczego to <br/> ważne?</h2>
            </div>

            <div className="col-6@md">
                <h3 className="margin-bottom-xl">Facere harum ipsam maiores necessitatibus neque nobis repellat repellendus saepe sit, totam ullam, voluptatum?</h3>

                <Accordion title="Szansa dla Elblążan" content="Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!"/>
                <Accordion title="Symbol rozwoju Elbląga" content="Ponad 30 lat inwestycji w drogi, port, centra usługowo-handlowe to chluba miasta. Ubolewamy, że modernizacja ominęła najważniejszy obiekt sportowy w mieście - stadion przy agrykola 8 - który jest przedmiotem żartów kibiców i komentatorów sportowych z całej Polski."/>
                <Accordion title="Lokalny patriotyzm" content="Trybuny stadionu to miejsce, w którym od najmłodszych lat mieszkańcy Elbląga uczą się patriotyzmu, przywiązania do barw i tradycji klubu sportowego Olimpia. To właśnie tutaj kształtują się ważne postawy, które pozwalają budować silną społeczność. Takie inicjatywy zasługują na dom z prawdziwego zdarzenia i przystający do rangi miasta."/>
                <Accordion title="Wizytówka miasta" content="Nowoczesny obiekt piłkarski i silna drużyna to doskonała reklama miasta i prawdziwe okno na świat dla lokalnego biznesu, który ma szansę być częścią tej pięknej historii."/>
                <Accordion title="Rozwój młodzieży" content="Sport to od wieków najlepsza metoda kształtowania charakteru i kondycji dla młodych pokoleń. Kariery wielu młodych i utalentowanych piłkarzy z Elbląga często kończą się przedwcześnie ze względu na brak możliwości dalszego rozwoju w drużynie walczącej o najwyższe cele. Jednym z głównych powodów tego stanu rzeczy jest niewystarczająca infrastruktura."/>
                <Accordion title="Miejsce spotkań Elblążan" content="Stadiony piłkarskie to miejsca nie tylko zmagań sportowych, ale także imprez, kulturalnych wydarzeń i spotkań, które jednoczą mieszkańców miasta. Elbląg obecnie nie posiada punktu na mapie, który pozwala na organizację dużego wydarzenia plenerowego. Stadion jest idealnym miejscem do organizacji takich inicjatyw jak koncerty czy konferencje."/>

            </div>

        </div>
    )
}

export default Why

