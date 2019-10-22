import React from "react"

const ClickCards = props => {
    return (
        <div class="card">
            <div class="card-image">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default ClickCards