import React, { Component } from "react"
import "./style.css"
import pokemon from "../../pokemon.json"

class ClickCards extends Component {

    state = {
        pokemon
    }

    handleClick = event => {
        console.log("click works")
        
        for (let i = this.state.pokemon.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
        }
        this.setState({ pokemon })
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