import React from "react"
import "./sidebar.css"

import joshjpg from "../../images/Josh.jpg"
import awsdevopseng from "../../images/aws-certified-devops-engineer-professional.png"
import awssaassoc from "../../images/aws-certified-solutions-architect-associate.png"
import azuredevopseng from "../../images/microsoft-certified-devops-engineer-expert.png"
import azureadministrator from "../../images/microsoft-certified-azure-administrator-associate.2.png"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={joshjpg} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small style={{  }} className="text-muted">{tagline}</small>
            <div style={{ clear: `both`, paddingTop: `10px` }}>
                <img src={awsdevopseng} />
                <img src={awssaassoc} />
                <img src={azuredevopseng} />
                <img src={azureadministrator} />
            </div>
        </div>
    )
}

export default Bio