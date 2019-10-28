import React, { Component } from "react"
import "./style.css"
import pokemon from "../../pokemon.json"

class ClickCards extends Component {

    state = {
        pokemon,
        guessedArr: [],
        highScore: []
    }

    handleClick = id => {

        if (this.state.guessedArr.includes(id)) {
            alert("Game Over")

            const roundScore = this.state.guessedArr.length

            if (roundScore >= this.state.highScore) {
                this.setState({
                    pokemon,
                    guessedArr: [],
                    highScore: roundScore
                })
            } else {
                this.setState({
                    pokemon,
                    guessedArr: []
                })
            }
            return
        }

        const addIdToArray = [...this.state.guessedArr, id];
        const shuffleArr = [...this.state.pokemon].sort(() => Math.random() - 0.5);

        this.setState({
            pokemon: shuffleArr,
            guessedArr: addIdToArray
        })
    }

    render() {
        console.log('guessedArr', this.state.guessedArr);
        console.log("highScore", this.state.highScore);
        return (
            this.state.pokemon.map(({ id, name, image }) => (
                <div key={id} className="card">
                    <div className="card-image">
                        <img
                            alt={name}
                            src={image}
                            id={id}
                            name={name}
                            onClick={() => this.handleClick(id)}
                        />
                    </div>
                </div>
            ))

        )
    }
}

export default ClickCards