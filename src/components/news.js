import * as React from "react";
import Card from "./card";
import { graphql, useStaticQuery } from "gatsby"

const News = ({showHeading}) => {
    const data = useStaticQuery(graphql`
        query ArticleQuery {
          allStrapiArticle {
            edges {
              node {
                id
                slug
                date
                title
                 media {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                content {
                  data {
                    content
                  }
                }
              }
            }
          }
        }
  `)

    return (
        <div className="section">
            <div className="grid gap-lg">
                <h2 className=" news__heading">Aktualności</h2>
                <div className="news">

                    {data.allStrapiArticle.edges.map(edge => (

                        <Card title={edge.node.title}
                              date={edge.node.date}
                              content={edge.node.content.data.content}
                              slug={edge.node.slug}
                              media={edge.node.media.localFile}
                        />

                    ))}

                </div>
            </div>
        </div>
    )
}

export default News

