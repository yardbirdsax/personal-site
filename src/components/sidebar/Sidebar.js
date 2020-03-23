import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio"
import "./sidebar.css"

import SocialLinks from "./SocialLinks"
import TechTags from "./TechTags"


const Sidebar = () => {
    return (
        <StaticQuery
            query={graphql`
                query SiteBioQuery {
                    site {
                        siteMetadata {
                            title
                            tagline
                            author
                            contacts {
                                linkedin
                                github
                                twitter
                            }
                            labels {
                                tag
                                tech
                                name 
                                size 
                                color
                            }
                        }
                    }
                    allMarkdownRemark(
                        limit: 10
                        sort: { fields: [frontmatter___date], order: DESC }
                        filter: { frontmatter: { published: { eq: true } } }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <div className="sidebar-main border-right">
                        <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
                        <SocialLinks contacts={data.site.siteMetadata.contacts} />
                        <div className="page-links">
                            <Link to="/"><span className="text-dark d-block py-1">Home</span></Link>
                            {/*<Link to="/services"><span className="text-dark d-block py-1">Services</span></Link>}
                            <Link to="/resources"><span className="text-dark d-block py-1">Resources</span></Link>*/}
                            <Link to="/blog"><span className="text-dark d-block py-1">Blog</span></Link>
                            <Link to="/techusage"><span className="text-dark d-block py-1">My Tech Usage Policy</span></Link>
                            <Link to="/resume"><span className="text-dark d-block py-1">Resume</span></Link>
                        </div>
                        {/* <div className="tech-tags mt-4">
                            <TechTags labels={data.site.siteMetadata.labels} posts={data.allMarkdownRemark.edges} />
                        </div> */}
                    </div>
                </>
            )}
        />
    )
}

export default Sidebar