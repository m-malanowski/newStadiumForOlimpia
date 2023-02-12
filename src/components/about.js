import * as React from "react"
import {Link} from "gatsby";

const About = () => {
    return (
        <div className="section">
            <div className="grid gap-lg">
                <div className="col-6@md">
                    <h2 className="uppercase">O co chodzi?</h2>
                </div>
                <div className="col-6@md">
                    <h3>Lorem ipsum dolor sit amet, consectetur adip scing elit, sed do eiusmod tempor incididunt ut aliqua. Ut enim ad minim</h3>
                    <div className="grid margin-top-lg">
                        <div className="col-6@md"></div>
                        <div className="col-6@md">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum dolore laboriosam perspiciatis sequi sunt? Asperiores consequuntur doloremque excepturi laudantium magni? Amet consectetur expedita explicabo necessitatibus quidem ratione repudiandae sed?</p>
                            <p className="margin-top-lg">Aspernatur cum dolore laboriosam perspiciatis sequi sunt? Asperiores consequuntur doloremque excepturi laudantium magni? </p>

                            <Link to="/list-otwarty" className="link">Przeczytaj list otwarty <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" fill="none"><path fill="#0E6AAC" d="M14.354 4.354a.5.5 0 0 0 0-.708L11.172.464a.5.5 0 1 0-.708.708L13.293 4l-2.829 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 4.5h14v-1H0v1Z"/></svg></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-lg margin-top-xxl">
                <div className="col-6@md">
                    <h2 className="uppercase">Kim jesteśmy?</h2>
                </div>
                <div className="col-6@md">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <span>tempor incididunt ut labore et dolore magna aliqua</span>. Ut enim ad minim veniam. quis nostrud exercitation</h3>
                </div>
            </div>

        </div>
    )
}

export default About

