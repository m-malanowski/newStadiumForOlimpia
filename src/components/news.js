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
                <h2 className="uppercase news__heading">Aktualności</h2>
                <div className="news">

                    {data.allStrapiArticle.edges.map(edge => (

                        <Card title={edge.node.title}
                              date={edge.node.date}
                              content={edge.node.content.data.content}
                              slug={edge.node.slug}
                        />

                    ))}

                </div>
            </div>
        </div>
    )
}

export default News

