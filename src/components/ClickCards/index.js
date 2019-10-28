import React, { Component } from "react"
import "./style.css"
import pokemon from "../../pokemon.json"

class ClickCards extends Component {

    state = {
        pokemon,
        guessedArr: []
    }

    // gameOver() {
    //     empty guessedArr
    //     reset score
    //     log high score
    //     compare score with high score
    // }

    handleClick = id => {

        if (this.state.guessedArr.includes(id)) {
            alert("you lose")
            
            this.setState({
                pokemon,
                guessedArr: []
            })
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