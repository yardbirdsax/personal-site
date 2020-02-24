import React from "react"
import "./sidebar.css"

import joshjpg from "../../images/josh.jpg"
import awscert from "../../images/aws-certified-logo_color-horz_180x30.jpg"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={joshjpg} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small style={{  }} className="text-muted">{tagline}</small>
            <img src={awscert} style={{ maxWidth: "200px", display: `block`  }} />
        </div>
    )
}

export default Bio