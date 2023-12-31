import React from "react"
import Layout from "../../components/layout/layout"
import PageLayout from "../../components/page-layout/page-layout"
import "./project.css"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String) {
    projectsJson(id: { eq: $id }) {
      name
      description
      route
      id
      repo
    }
  }
`
const ProjectPage = ({ data }) => {
  const project = data.projectsJson
  return (
    <PageLayout>
      <Layout>
        <h1 className={"title"}>{project.name}</h1>
        <p className={"subtitle"}>{project.description}</p>
      </Layout>
    </PageLayout>
  )
}
export default ProjectPage
