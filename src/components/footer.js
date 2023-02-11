import * as React from "react";
import {Link} from "gatsby";

const Footer = () => {
    return (
        <div className="section section--full section--primary">
            <div className="container">
                <div className="footer">
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                    <ul>
                        <li><Link to="/" activeClassName="active-link">Główna</Link></li>
                        <li><Link to="/artykuly" activeClassName="active-link">Artykuły</Link></li>
                        <li><Link to="/kontakt" activeClassName="active-link">Wesprzyj nas</Link></li>
                        <li><a href="https://zksolimpia.pl/">Olimpia Elbląg</a></li>
                        <li><Link to="/kontakt" activeClassName="active-link">Kontakt</Link></li>
                    </ul>

                    <p>© 2023 stadiondlaelblaga.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
