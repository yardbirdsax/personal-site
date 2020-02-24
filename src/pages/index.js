import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle, FaWindows, FaDatabase , FaAws} from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"
import Panel from "../components/panel/panel"
import PanelContainer from "../components/panel/panelContainer"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="Main" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="Main" />
                    <div className="mt-3">
                        <h2 className="heading">About Me</h2>
                        <p>
                            I'm a self-taught data and DevOps expert, who loves nothing more than helping people to leverage technology to make their lives easier, both at work and in their personal lives.
                        </p>
                        <p>
                            For over a decade, I've worked in technology, in roles ranging from development to systems administration and leadership. Along the way, I've developed skills in a wide range of technologies, including Microsoft Azure, AWS, SQL Server, Elasticsearch, and many others.
                        </p>
                        <div style={{alignContent:'center', display: 'block'}}>
                            <div style={{justifyContent: 'space-between', display: 'flex', width: "80%", alignContent: 'center'}}>
                                <FaWindows size="5em" /> <FaAws size="5em" /> <FaDatabase size="5em" />
                            </div>
                        </div>
                    </div>
{/*                     <PanelContainer>
                        <Panel title="Services" width="half" moreLink="/services" moreText="Work With Me">
                            <p>I work with organizations to ensure scalable, best-practice compliant cloud environments,
                                as well as designing and implementing cloud based data strategies.
                            </p>
                        </Panel>
                        <Panel title="Free Resources" width="half" moreLink="/resources" moreText="See More">
                            <p>I've created a number of freely available resources. Here's a selection of my favorites.</p>
                        </Panel>
                    </PanelContainer> */}
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

