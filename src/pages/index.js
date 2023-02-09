import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero";
import About from "../components/about";
import Cta from "../components/cta";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>

      <Hero />
      <About />
        <Cta />

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
