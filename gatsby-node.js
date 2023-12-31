exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            name
            description
            route
            id
          }
        }
      }
    }
  `)
  // generate projects
  if (results.data.allProjectsJson && results.data.allProjectsJson.edges) {
    results.data.allProjectsJson.edges.forEach(project => {
      createPage({
        path: `/projects/${project.node.route}`,
        component: require.resolve("./src/templates/project/project.js"),
        context: {
          id: project.node.id,
        },
      })
    })
  } else {
    throw new Error("No projects found.")
  }
}
