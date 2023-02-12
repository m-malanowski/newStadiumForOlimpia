import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/hero";
import About from "../components/about";
import Cta from "../components/cta";
import HorizontalText from "../components/horizontalText";
import Petition from "../components/petition";
import News from "../components/news";
import Projects from "../components/projects";
import Footer from "../components/footer";
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
        <Hero />
        <About />
        <Cta />
        <HorizontalText />
        <Petition />
        <News />
        <Projects />
        <Footer />
    </>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
