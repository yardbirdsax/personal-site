/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import Header from "./header/header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            author
            contacts {
              linkedin
              github
              twitter
              medium
            }
          }
        }
      }
    `}
      render={data => (
        <>
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts} />
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main className="p-4">{children}</main>
            <footer className="text-center">
              <hr/>
              <p className="d-inline">© {new Date().getFullYear()} Josh Feierman, All Rights Reserved.</p>
              <p className="d-inline"> Forked from <a href="https://github.com/willjw3/gatsby-starter-developer-diary">Developer Diary</a> by Will Ward.</p>
              <p className="mt-5 text-muted"><i> Built with <a className="text-info" href="https://www.gatsbyjs.org">Gatsby</a>, hosted by <a className="text-info" href="https://aws.amazon.com">AWS</a>.</i>
              </p>
            </footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
