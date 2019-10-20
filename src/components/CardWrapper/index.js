import React from "react"
import "./style.css"

const CardWrapper = props => {
    return (
        <div className="card-container row">{props.children}</div>
    )
}

export default CardWrapper
