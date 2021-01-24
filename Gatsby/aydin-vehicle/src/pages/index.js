import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  Wrapper,
  Image,
  BottomEdgeDown,
} from "./pageStyles/pageStyles"
import { COLORS } from "../constants"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageHeaderDescription,
          homePageHeaderPicture,
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
          wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageHeaderDescription
            homePageHeaderPicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100, grayscale: true) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            homePageHeaderTitle
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div className="banner">
          <Image
            fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-description">{homePageHeaderDescription}</p>
          </div>
          <BottomEdgeDown color={COLORS.BLACK} />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
