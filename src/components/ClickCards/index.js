import React, { Component } from "react"
import "./style.css"
import pokemon from "../../pokemon.json"

class ClickCards extends Component {

    state = {
        pokemon
    }

    handleClick = event => {
        this.setState({ pokemon })
        console.log("click works")
    }

    render() {
        return (
            this.state.pokemon.map(({ id, name, image }) => (
                <div className="card">
                    <div className="card-image">
                        <img
                            alt={name}
                            src={image}
                            id={id}
                            key={id}
                            name={name}
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
            ))

        )
    }
}

export default ClickCards