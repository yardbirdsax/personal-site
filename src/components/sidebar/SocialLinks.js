import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaTwitterSquare,
    FaMedium
} from "react-icons/fa"
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links mt-3 mb-3">
            <a className="text-secondary p-2"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={26} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={26} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={26} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.medium}>
                <span title="Medium">
                    <FaMedium size={26} style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks