import * as React from "react";
import {Helmet} from "react-helmet";
import Footer from "../components/footer";
import Layout from "../components/layout"
import {graphql} from "gatsby";

const Contact = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Helmet bodyAttributes={{
                id: "contact"
            }}/>
            <Layout location={location} title={siteTitle}>

                <div className="section">
                    <div className="grid gap-xl margin-top-xxxl">
                        <div className="col-6@md">
                            <h3 className="color-white">Lorem ipsum dolor sit amet, consectetur adip scing elit, sed do eiusmod tempor incididunt ut aliqua. Ut enim ad minim</h3>

                            <div className="grid gap-md">
                                <div className="col-6@md">
                                    <h5 className="color-accent margin-top-lg">Kontakt</h5>
                                    <ul className="contact__info">
                                        <li>info@stadiondlaelblaga.pl</li>
                                        <li>+48 509 870 672</li>
                                        <li>+48 784 4760 857</li>
                                    </ul>
                                </div>

                                <div className="col-6@md">
                                    <h5 className="color-accent margin-top-lg">Social media</h5>
                                    <ul className="contact__info">
                                        <li>Instagram</li>
                                        <li>Facebook</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-6@md">
                            <form className="form"
                                  action="https://formspree.io/f/xjvdyakv"
                                  method="POST"
                            >
                                <div className="form__inputs margin-top-lg">
                                    <input type="text" className="form__input" placeholder="Twoje imię" name="name"/>
                                    <input type="text" className="form__input" placeholder="Adres email" name="mail"/>
                                    <div className="flex column">
                                        <input type="text" className="form__input" placeholder="Wiadomość"
                                               name="description"/>
                                        <small className="color-white margin-top-xxs">Używając tego formularza zgadzam się na przetwarzanie przekazywanych danych w celu przygotowania i prezentacji oferty oraz akceptuję politykę prywatności.</small>
                                    </div>

                                    <button type="submit" className="button button--third margin-left-auto">Wyślij wiadomość</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*<Projects />*/}
                <Footer/>
            </Layout>
        </>
    )
}

export default Contact


export const contactQuery = graphql`
      query MyQuery2 {
          site {
              siteMetadata {
                title
              }
           }
    }
`
