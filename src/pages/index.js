import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero";
import About from "../components/about";
import Cta from "../components/cta";
import HorizontalText from "../components/horizontalText";
import Petition from "../components/petition";
import News from "../components/news";
import Projects from "../components/projects";
import Footer from "../components/footer";
import FakeLoader from "../components/fakeLoader";

const BlogIndex = ({ data, location }) => {

  return (
    <>
        <Hero />
        <About />
        <Cta />

        {/*<HorizontalText />*/}

        <Petition />

        <News />
        <Projects />
        <Footer />
    </>
  )
}

export default BlogIndex

export const Head = () => <Seo title="Stadion Dla Elbląga | Wesprzyj Naszą Iniciatywę" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
