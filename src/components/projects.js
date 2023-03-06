import * as React from "react";
import Card from "./card";
import {graphql, useStaticQuery} from "gatsby";

const Projects = () => {
    const data = useStaticQuery(graphql`
        query ProjectQuery {
          allStrapiProject {
            edges {
              node {
                id
                slug
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

        <div className="section section--full section--primary">
            <div className="container grid gap-lg">
                <h2 className="color-white projects__heading">Podobne realizacje</h2>
                <div className="projects">

                    {data.allStrapiProject.edges.map(edge => (

                        <Card
                            title={edge.node.title}
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

export default Projects
