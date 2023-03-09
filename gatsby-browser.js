// custom typefaces
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/main.scss"
// CSS luminaFrame
import "./src/luminaFrame/index.scss"
// Highlighting for code blocks
import "prismjs/themes/prism.css"
import Layout from "./src/components/layout"
import React from "react";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

const transitionDelay = 500
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    if (location.action === "PUSH") {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
}


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
