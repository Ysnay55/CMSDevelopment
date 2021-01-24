import React from "react"
import {graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Menu from './Menu'
import {HeaderWrapper} from './headerStyles/headerStyles'

const Header = ({ siteTitle }) => {
  const {
    wpcontent: { menuItems },
} = useStaticQuery(graphql`
query{
  logo: file(relativePath: { eq: "logo.png" }) {
    childImageSharp {
      fixed(quality: 100, width: 200) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  wpcontent {
    menuItems {
      edges {
        node {
          label
          path
        }
      }
    }
  }
}
  `)
  return <HeaderWrapper>
    <Link to="/" style={{textDecoration: 'none'}}>
      <p className="HeaderTitle">Ysnay's Garage</p>
    </Link>
    <Menu menuItems={menuItems.edges}></Menu>
  </HeaderWrapper>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
