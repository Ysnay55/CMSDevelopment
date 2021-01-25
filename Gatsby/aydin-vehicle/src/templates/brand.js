import React from "react"
import { graphql } from "gatsby"
import { Wrapper, Image } from "./templateStyles/artistStyles"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
    Wrapper2,
    BottomEdgeDown,
} from "../pages/pageStyles/pageStyles"
import { COLORS } from "../constants"

const ArtistTemplate = ({
  data: {
    wpcontent: {
      brand: {
        brand,
        models: { edges: models },
      },
    },
  },
}) => {
  const { picture1, picture2, picture3 } = brand.pictures
  const pictures = [picture1, picture2, picture3]

  return (
    <Layout>
      <SEO title="Brands" />
      <Wrapper2>
      {models.map(({ node: model }) => (
          <div className="artist-image">
            <div className="roles">
                <div key={model.brandName} className="role"> 
                    <div className="banner">
                  <div className="inner-div">
                       {brand.description}
                  </div>
                  </div>
                  <BottomEdgeDown color={COLORS.BLACK} />
                </div>               
            </div> 
          </div>))}  
          </Wrapper2>
          <Wrapper>
        <div className="artist-pictures">
          {pictures.map((picture, i) => (
            <div key={i} className="artist-picture">
              <Image
                fluid={picture.imageFile.childImageSharp.fluid}
                alt={picture.altText}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default ArtistTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    wpcontent {
      brand(id: $id, idType: ID) {
        models {
          edges {
            node {
              name
            }
          }
        }
        brand {
          brandName
          description
          fieldGroupName
          firstRegistration
          modelName
          pictures {
            picture3 {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              altText
            }
            picture2 {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              altText
            }
            picture1 {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 75) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              altText
            }
          }
        }
        id
      }
    }
  }
  `