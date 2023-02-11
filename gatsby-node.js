const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const resultArticle = await graphql(`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const resultProject = await graphql(`
    query {
      allStrapiProject {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (resultArticle.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (resultProject.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  resultArticle.data.allStrapiArticle.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      // path: slug,
      path: `/${slug}`,
      component: require.resolve(`./src/templates/article-post.js`),
      context: { slug: slug },
    })
  })

  resultProject.data.allStrapiProject.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      // path: slug,
      path: `/${slug}`,
      component: require.resolve(`./src/templates/project-post.js`),
      context: { slug: slug },
    })
  })


}
