import * as React from "react"
import {graphql} from "gatsby";
import SubHero from "../components/subHero";
import Projects from "../components/projects";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
import Seo from "../components/seo";
const Articles = ({data, location}) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <>
            <Helmet bodyAttributes={{
                id: "projects"
            }}/>
            <SubHero title="Podobne realizacje"/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default Articles
export const Head = () => <Seo title="Stadion Dla Elbląga | Podobne Realizacje" />

export const articlesQuery = graphql`
      query MyQuery {
          site {
              siteMetadata {
                title
              }
           }
    }
`
