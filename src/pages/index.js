import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from "../components/page-layout/page-layout";
import Layout from "../components/layout/layout"
import Carousel from "../components/carousel/carousel"
import _ from "lodash"

const Home = () => {
  const data = useStaticQuery(graphql`
  query {
    allMainCarouselJson {
      edges {
        node {
          alt
          id
          label
          src
          text
        }
      }
    }
  }`)

  return (
      <PageLayout>
        <Layout style={{marginTop: 100}}>
          <Carousel 
            contents={_.map(data.allMainCarouselJson.edges, (edge) => edge.node)}
            >
          </Carousel>
        </Layout>
      </PageLayout>     
  )
}


export default Home;