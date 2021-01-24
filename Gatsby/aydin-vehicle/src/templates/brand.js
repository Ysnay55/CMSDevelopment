import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Image } from "./templateStyles/artistStyles"

const BrandTemplate = ({
  data: {
    wpcontent: {
        brand: {
          edges:{
              node:{
                 brands:{
                     edges:{
                         node:{
                                brands: { brandName,description,firstRegistration,modelName, pictures: {picture1} },
                         }
                     }
                 }
              }
          }
        }

      }
  },
}) => {
  const { picture1, picture2, picture3 } = brand.pictures
  const pictures = [picture1, picture2, picture3]

  return (
    <Layout>
      <SEO title="Vehicles" />
      <Wrapper>
        <div className="artist-container">
          <div className="artist-image">
            <div className="roles">
              {brands.map(({ node: role }) => (
                <div key={role.brandName} className="role">
                  {role.brandName}
                </div>
              ))}
            </div>
          </div>
          <div className="artist-info">
            <h2>
              {brand.brandName}
            </h2>
            {brand.brandName ? (
              <h3>
                <span>{brand.brandName} -</span> <span>{brand.modelName}</span>
              </h3>
            ) : (
              <h3>{brand.modelName}</h3>
            )}
            <p className="description">{brand.description}</p>
          </div>
        </div>
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

export default BrandTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    wpcontent{
    brand(id: $id, idType: ID) {
      models {
        edges {
          node {
            name
            brands {
              edges {
                node {
                  brand {
                    brandName
                    description
                    fieldGroupName
                    firstRegistration
                    modelName
                    pictures {
                      picture1 {
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
                    }
                  }
                  id
                }
              }
            }
          }
        }
      }
    }
  }
    }
`
