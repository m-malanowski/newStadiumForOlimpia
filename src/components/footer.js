import * as React from "react";
import {Link} from "gatsby";

const Footer = () => {
    return (
        <div className="section section--full section--primary">
            <div className="container">
                <div className="footer">
                    <ul className="links">
                        <li><a href="https://www.facebook.com/nowystadiondlaelblaga" target="_blank">Facebook</a></li>
                        <li><a href="https://www.instagram.com/stadiondlaelblaga/" target="_blank">Instagram</a></li>
                    </ul>
                    <ul className="links">
                        {/*<li><Link to="/" activeClassName="active-link">Główna</Link></li>*/}
                        <li><Link to="/artykuly" activeClassName="active-link">Artykuły</Link></li>
                        <li><Link to="/podobne-inwestycje" activeClassName="active-link">Podobne inwestycje</Link></li>
                        <li><Link to="/kontakt" activeClassName="active-link">Kontakt</Link></li>
                        <li>Credits</li>

                    </ul>

                    <p>© 2023 stadiondlaelblaga.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
