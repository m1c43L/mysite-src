import React from "react"
import Layout from "../../components/layout/layout"
import PageLayout from "../../components/page-layout/page-layout"
import "./project.css"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String) {
    projectsJson(id: { eq: $id }){
      name
      description
      route
      id
    }
  }
` 
const ProjectPage = ({data}) => {
  const project = data.projectsJson
  return (
  <PageLayout>
    <Layout>
        <h1 style={{color: "lightgray"}}>{project.name}</h1>
        <p style={{color: "lightgray", opacity: 0.7}}>{project.description}</p>
    </Layout>
  </PageLayout>
)}
export default ProjectPage