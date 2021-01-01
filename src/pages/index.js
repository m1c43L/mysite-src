import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import PageLayout from "../components/page-layout/page-layout";
import Layout from "../components/layout/layout"
// import Carousel from "../components/carousel/carousel"
// import _ from "lodash"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import _2021 from "../components/_2021/_2021";

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
          <_2021 contents={{}}></_2021>
        </Layout>
      </PageLayout>     
  )
}


export default Home;