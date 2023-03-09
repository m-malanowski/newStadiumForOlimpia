import * as React from "react"
import {Link} from "gatsby";
import Accordion from "./accordion";
import FadeInWhenVisible from "./fadeInWhenVisible";

const Why = () => {
    return (
        <div className="grid gap-lg margin-top-xl">
            <div className="col-6@md">
                <FadeInWhenVisible delay={.3} nameOfClass="sticky">
                    <h2>Dlaczego to <br/> ważne?</h2>
                </FadeInWhenVisible>
            </div>

            <div className="col-6@md">
                <FadeInWhenVisible delay={.3}>
                    <h3 className="margin-bottom-xl">Nasza batalia o nowy stadion to nie tylko aspekt sportowy. Dla nas to miejsce, w którym kształtują się postawy patriotyczne, przywiązanie do tradycji i tworzenia silnej i lojalnej społeczności lokalnej. </h3>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Szansa dla Elblążan" content="Stadion powinien być miejscem dla wszystkich mieszkańców. Niestety, zaniedbania sprawiły, że nie jest on przystosowany m.in. do komfortowego oglądania meczów przez osoby niepełnosprawne, a fatalne zaplecze sanitarne wręcz odstrasza część widzów. Walczymy o to, by każdy mógł zaznać smak emocji w godziwych warunkach!"/>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Symbol rozwoju Elbląga" content="Ponad 30 lat inwestycji w drogi, port, centra usługowo-handlowe to chluba miasta. Ubolewamy, że modernizacja ominęła najważniejszy obiekt sportowy w mieście - stadion przy agrykola 8 - który jest przedmiotem żartów kibiców i komentatorów sportowych z całej Polski."/>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Lokalny patriotyzm" content="Trybuny stadionu to miejsce, w którym od najmłodszych lat mieszkańcy Elbląga uczą się patriotyzmu, przywiązania do barw i tradycji klubu sportowego Olimpia. To właśnie tutaj kształtują się ważne postawy, które pozwalają budować silną społeczność. Takie inicjatywy zasługują na dom z prawdziwego zdarzenia i przystający do rangi miasta."/>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Wizytówka miasta" content="Nowoczesny obiekt piłkarski i silna drużyna to doskonała reklama miasta i prawdziwe okno na świat dla lokalnego biznesu, który ma szansę być częścią tej pięknej historii."/>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Rozwój młodzieży" content="Sport to od wieków najlepsza metoda kształtowania charakteru i kondycji dla młodych pokoleń. Kariery wielu młodych i utalentowanych piłkarzy z Elbląga często kończą się przedwcześnie ze względu na brak możliwości dalszego rozwoju w drużynie walczącej o najwyższe cele. Jednym z głównych powodów tego stanu rzeczy jest niewystarczająca infrastruktura."/>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={.3}>
                    <Accordion title="Miejsce spotkań Elblążan" content="Stadiony piłkarskie to miejsca nie tylko zmagań sportowych, ale także imprez, kulturalnych wydarzeń i spotkań, które jednoczą mieszkańców miasta. Elbląg obecnie nie posiada punktu na mapie, który pozwala na organizację dużego wydarzenia plenerowego. Stadion jest idealnym miejscem do organizacji takich inicjatyw jak koncerty czy konferencje."/>
                </FadeInWhenVisible>

            </div>

        </div>
    )
}

export default Why

