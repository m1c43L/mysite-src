import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import PageLayout from "../components/page-layout/page-layout";
import Layout from "../components/layout/layout"
// import Carousel from "../components/carousel/carousel"
// import _ from "lodash"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import NewYear from "../components/new-year/new-year";

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
  
  return (
      <PageLayout>
        <Layout style={{marginTop: 100}}>
          <NewYear contents={{}} year={2023}></NewYear>
        </Layout>
      </PageLayout>     
  )
}


export default Home;