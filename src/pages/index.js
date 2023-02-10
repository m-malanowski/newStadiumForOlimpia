import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
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
    <Layout location={location} title={siteTitle}>

        <Hero />
        <About />
        <Cta />
        <HorizontalText />
        <Petition />
        <News />

        <Projects />
        <Footer />

    </Layout>
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
