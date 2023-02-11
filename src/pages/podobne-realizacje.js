import * as React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout"
import News from "../components/news";
import SubHero from "../components/subHero";
import Projects from "../components/projects";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
const Articles = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Helmet bodyAttributes={{
                id: "projects"
            }}/>
            <Layout location={location} title={siteTitle}>
                <SubHero title="Podobne realizacje"/>
                <Projects/>
                <Footer/>
            </Layout>
        </>
    )
}

export default Articles

export const articlesQuery = graphql`
      query MyQuery {
          site {
              siteMetadata {
                title
              }
           }
    }
`
