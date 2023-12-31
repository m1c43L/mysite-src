import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import PageLayout from "../components/page-layout/page-layout"
import Layout from "../components/layout/layout"
// import Carousel from "../components/carousel/carousel"
// import _ from "lodash"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import NewYear from "../components/new-year/new-year"

const Home = () => {
  //  useStaticQuery(graphql`
  // query {
  //   allMainCarouselJson {
  //     edges {
  //       node {
  //         alt
  //         id
  //         label
  //         src
  //         text
  //       }
  //     }
  //   }
  // }`)

  // {/* <Carousel
  // contents={_.map(data.allMainCarouselJson.edges, (edge) => edge.node)}
  //>
  // </Carousel> */}
  const inMillis10Days = 1000 * 60 * 60 * 24 * 10
  const year = new Date(Date.now() + inMillis10Days)

  return (
    <PageLayout>
      <Layout style={{ marginTop: 100 }}>
        <NewYear contents={{}} year={year.getFullYear()}></NewYear>
      </Layout>
    </PageLayout>
  )
}

export default Home
