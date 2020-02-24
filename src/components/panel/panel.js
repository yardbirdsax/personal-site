import React from "react"
import "./panel.css"

const Panel = ({ children, title, width, moreText, moreLink }) => (
    <div className={`panel-${width}`}>
      <div className="panel-content">
        {title !== undefined && <h3 className="panel-title">{ title }</h3>}
        {children}
      </div>
      {moreText !== undefined && <div className="panel-more"><a className="read-more" href={moreLink}>{moreText}</a></div>}
    </div>
)

export default Panel
