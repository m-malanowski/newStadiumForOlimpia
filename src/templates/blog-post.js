import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ArticleSingle = ({data, location}) => {

  return (
    <Layout location={location} >
        <div>
            dupa
        </div>
    </Layout>
  )
}


export default ArticleSingle
export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticle(slug: { eq: $slug }) {
      id
      title
    }
  }
`
