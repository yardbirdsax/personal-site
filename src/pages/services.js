import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle, FaWindows, FaDatabase , FaAws} from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"
import Panel from "../components/panel/panel"
import PanelContainer from "../components/panel/panelContainer"

const ServicesPage = (props) => {
    return (
        <Layout>
            <SEO title="Services" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="Services" />
                    <div className="mt-3">
                        <h1 className="heading">Services</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default ServicesPage

