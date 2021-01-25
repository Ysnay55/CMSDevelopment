import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
    Wrapper2,
    Image,
    BottomEdgeDown,
    Artist
} from "./pageStyles/pageStyles"
import { COLORS } from "../constants"

const SalesPage = () => {
    const {
        wpcontent: {
          page: {
            salesMeta: { salesPageHeaderDescription, salesPageHeaderTitle },
          },
          brands: { edges: brands },
        },
      } = useStaticQuery(graphql`
        query {
          wpcontent {
            page(id: "sales", idType: URI) {
                salesMeta {
                    salesPageHeaderDescription
                    salesPageHeaderTitle
                }
            }
            brands {
                    edges {
                        node {
                        brand {
                            brandName
                            description
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
                        slug
                        }
                    }
                 }
          }
        }
      `)

    return (
        <Layout>
            <SEO title="Sales" />
            <Wrapper2 artistsColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
            <div className="banner">
            <div className="inner-div">
                <p className="header-description">{salesPageHeaderTitle}</p>
                <p className="header-description">{salesPageHeaderDescription}</p>
            </div>
            <BottomEdgeDown color={COLORS.BLACK} />
            </div>
                <div className="artists">
                    <h2>Our Vehicles</h2>
                    <div className="artist-items">
                        {brands.map(({ node: { brand, slug } }) => (
                            <Artist to={`/${slug}`} key={slug}>
                                <Image
                                    fluid={brand.pictures.picture1.imageFile.childImageSharp.fluid}
                                    alt={brand.pictures.picture1.altText}
                                />
                                <div className="artist-info">
                                    <p>
                                        {brand.brandName} {brand.modelName}
                                    </p>
                                    {brand.description && <p>{brand.artistName}</p>}
                                </div>
                            </Artist>
                        ))}
                    </div>
                </div>
            </Wrapper2>
        </Layout>
    )
}

export default SalesPage
