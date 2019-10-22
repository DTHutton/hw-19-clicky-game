import React from "react"
import "./style.css"

const ClickCards = props => {
    return (
            <div className="card">
                <div className="card-image">
                    <img 
                    alt={props.name} 
                    src={props.image} 
                    id={props.id}
                    name={props.name}
                    />
                </div>
            </div>
    )
}

export default ClickCards