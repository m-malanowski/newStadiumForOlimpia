import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <h1>404: Not Found</h1>
      <p>Szukaj dalej...</p>
    </>
  )
}

export const Head = () => <Seo title="404: Brak strony" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
