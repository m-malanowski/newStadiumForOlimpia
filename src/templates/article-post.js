import * as React from "react"
import {Link, graphql} from "gatsby"
import ArticleHero from "../components/articleHero";
import Footer from "../components/footer";
import Projects from "../components/projects";
import ReactMarkdown from "react-markdown";

const ArticleSingle = ({data, location}) => {

    return (
        <>
            <ArticleHero title={data.article.title} data={data.article.date} media={data.article.media.localFile.childrenImageSharp[0]} />

            <div className="grid gap-md article__content">

                <div className="col-2@md article__social">
                    <a href="https://www.facebook.com/nowystadiondlaelblaga" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path stroke="var(--color-primary)" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"/>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com/stadiondlaelblaga/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" fill="none">
                            <g clip-path="url(#a)">
                                <path fill="var(--color-primary)"
                                      d="M10.504 6.61a5.377 5.377 0 0 0-5.386 5.385 5.377 5.377 0 0 0 5.386 5.386 5.377 5.377 0 0 0 5.386-5.386 5.377 5.377 0 0 0-5.386-5.386Zm0 8.887a3.508 3.508 0 0 1-3.501-3.502 3.505 3.505 0 0 1 3.501-3.501 3.505 3.505 0 0 1 3.502 3.501 3.508 3.508 0 0 1-3.502 3.502Zm6.863-9.108c0 .699-.563 1.256-1.257 1.256a1.256 1.256 0 1 1 1.256-1.256Zm3.567 1.275c-.08-1.683-.464-3.173-1.697-4.401-1.228-1.229-2.719-1.613-4.401-1.697-1.735-.099-6.933-.099-8.668 0C4.49 1.646 3 2.03 1.767 3.258.534 4.486.154 5.977.07 7.659c-.099 1.735-.099 6.933 0 8.668.08 1.682.464 3.173 1.697 4.401C3 21.956 4.486 22.341 6.168 22.425c1.735.098 6.933.098 8.668 0 1.682-.08 3.173-.464 4.401-1.697 1.228-1.228 1.613-2.719 1.697-4.401.098-1.735.098-6.929 0-8.663Zm-2.24 10.524a3.545 3.545 0 0 1-1.997 1.996c-1.383.549-4.665.422-6.193.422-1.528 0-4.814.122-6.192-.422a3.545 3.545 0 0 1-1.997-1.997c-.548-1.382-.422-4.664-.422-6.192 0-1.528-.122-4.814.422-6.192a3.545 3.545 0 0 1 1.997-1.997c1.383-.548 4.664-.422 6.192-.422 1.528 0 4.814-.121 6.193.422a3.546 3.546 0 0 1 1.996 1.997c.549 1.383.422 4.664.422 6.192 0 1.529.127 4.814-.422 6.193Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="var(--color-primary)" d="M0 0h21v24H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>

                </div>
                <div className="col-8@md">
                    <ReactMarkdown children={data.article.content.data.content} />
                    {/*<p>{data.article.content.data.content}</p>*/}
                </div>
                <div className="col-2@md"></div>

            </div>

            <Projects/>
            <Footer/>
        </>
    )
}


export default ArticleSingle
export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticle(slug: { eq: $slug }) {
        id
        slug
        title
        media {
          localFile {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
        date
        content {
          data {
            content
          }
        }
    }
  }
`
